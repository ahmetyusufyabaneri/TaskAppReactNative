import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Colors from '../themes/Colors';
import CustomInput from '../components/CustomInput';
import TodoItem from '../components/TodoItem';
import CustomButton from '../components/CustomButton';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmptyList from '../components/EmptyList';

const screenWidth = Dimensions.get('screen').width;

const TaskListScreen = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // const clearAll = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // useEffect(() => {
  //   clearAll();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, []),
  );

  const loadTasks = async () => {
    try {
      const existingTask = await AsyncStorage.getItem('tasks');

      const tasks = existingTask ? JSON.parse(existingTask) : [];
      setTasks(tasks);
    } catch (error) {
      return error;
    }
  };

  const filterTasks = () => {
    if (searchText) {
      const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  };

  useEffect(() => {
    filterTasks();
  }, [searchText, tasks]);

  const handleDeleteTask = async id => {
    try {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
      AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <SafeAreaView style={[styles.container, {marginBottom: 10}]}>
          <CustomInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder={'Search Task'}
          />
          <Text style={styles.title}>Tasks</Text>
          <FlatList
            data={filteredTasks}
            renderItem={({item, index}) => (
              <TodoItem
                key={index}
                data={item}
                onDelete={() => handleDeleteTask(item.id)}
              />
            )}
            ListEmptyComponent={EmptyList}
            keyExtractor={item => item?.id.toString()}
            showsVerticalScrollIndicator={false}
          />
          <CustomButton
            title={'Add Task'}
            style={{marginTop: 24, marginBottom: 8}}
            onPress={() => navigation.navigate(ScreenNames.addTask)}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  mainContentContainer: {
    width: screenWidth,
    height: '100%',
    position: 'absolute',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 12,
  },
});
