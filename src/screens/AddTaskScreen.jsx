import LottieView from 'lottie-react-native';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import CustomInput from '../components/CustomInput';
import Colors from '../themes/Colors';
import CustomButton from '../components/CustomButton';
import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Status from '../constants/Status';

const AddTaskScreen = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(Status);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked', date);
    hideDatePicker();
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
            <CustomInput onPress={() => showDatePicker()} />
          </View>
          <View style={styles.timeInputContainer}>
            <Text style={styles.label}>End Time</Text>
            <CustomInput onPress={() => showDatePicker()} />
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
      <CustomButton title="Create Task" />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
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
