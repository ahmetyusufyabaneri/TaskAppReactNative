import LottieView from 'lottie-react-native';
import {StyleSheet, Text, View} from 'react-native';
import CustomInput from '../components/CustomInput';
import Colors from '../themes/Colors';
import CustomButton from '../components/CustomButton';
import {useLayoutEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Status from '../constants/Status';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';
import {Toast} from 'toastify-react-native';

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {data} = route.params || {};

  const [taskTitle, setTaskTitle] = useState(data?.title || '');
  const [startDate, setStartDate] = useState(data?.startDate || '');
  const [endDate, setEndDate] = useState(data?.endDate || '');

  const [isStartDatePickerVisible, setIsStartDatePickerVisible] =
    useState(false);

  const [isEndDatePickerVisible, setIsEndDatePickerVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(data?.status || null);
  const [items, setItems] = useState(Status);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data ? 'Update Task' : 'Add Task',
    });
  }, [navigation, data]);

  const showStartDatePicker = () => {
    setIsStartDatePickerVisible(true);
  };

  const showEndDatePicker = () => {
    setIsEndDatePickerVisible(true);
  };

  const hideStartDatePicker = () => {
    setIsStartDatePickerVisible(false);
  };

  const hideEndDatePicker = () => {
    setIsEndDatePickerVisible(false);
  };

  const handleConfirmStartDate = date => {
    setStartDate(date.toString());
    hideStartDatePicker();
  };

  const handleConfirmEndDate = date => {
    setEndDate(date.toString());
    hideEndDatePicker();
  };

  const handleAddTask = async () => {
    if (!taskTitle || !startDate || !endDate || !value) {
      Toast.error('Please fill in all fields!');
      return;
    }

    const newTask = {
      id: data?.id || uuid.v4(),
      title: taskTitle,
      startDate,
      endDate,
      status: value,
    };

    try {
      const existingTasks = await AsyncStorage.getItem('tasks');
      let tasks = existingTasks ? JSON.parse(existingTasks) : [];

      if (data) {
        tasks = tasks.map(task => (task.id == data.id ? newTask : task));
        Toast.info('Task updated!');
      } else {
        tasks.push(newTask);
        Toast.success('Task created!');
      }

      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));

      navigation.navigate(ScreenNames.taskList);
    } catch (error) {
      console.log(error, 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <View style={styles.taskImageContainer}>
          <LottieView
            source={require('../assets/animations/add-task.json')}
            autoPlay
            loop
            style={{width: '100%', height: 140}}
          />
        </View>
        <View>
          <Text style={styles.label}>Task Name</Text>
          <CustomInput value={taskTitle} onChangeText={e => setTaskTitle(e)} />
        </View>
        <View style={styles.timeInputs}>
          <View style={styles.timeInputContainer}>
            <Text style={styles.label}>Start Time</Text>
            <CustomInput
              onPress={() => showStartDatePicker()}
              onChangeText={e => setStartDate(e)}
              value={startDate}
              isDate
            />
          </View>
          <View style={styles.timeInputContainer}>
            <Text style={styles.label}>End Time</Text>
            <CustomInput
              onPress={() => showEndDatePicker()}
              onChangeText={e => setEndDate(e)}
              value={endDate}
              isDate
            />
          </View>
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Status</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{borderWidth: 0}}
          />
        </View>
      </View>
      <CustomButton
        onPress={handleAddTask}
        title={data ? 'Update Task' : 'Create Task'}
      />

      <DateTimePickerModal
        onConfirm={handleConfirmStartDate}
        isVisible={isStartDatePickerVisible}
        mode="datetime"
        onCancel={hideStartDatePicker}
      />
      <DateTimePickerModal
        onConfirm={handleConfirmEndDate}
        isVisible={isEndDatePickerVisible}
        mode="datetime"
        onCancel={hideEndDatePicker}
      />
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.94,
    backgroundColor: Colors.background.primary,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  inlineContainer: {
    width: '100%',
  },
  taskImageContainer: {
    marginVertical: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  timeInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeInputContainer: {
    width: '45%',
  },
  dropdownContainer: {
    gap: 12,
  },
});
