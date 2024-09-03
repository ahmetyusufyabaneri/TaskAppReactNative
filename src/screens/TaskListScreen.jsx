import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../themes/Colors';
import CustomInput from '../components/CustomInput';
import TodoItem from '../components/TodoItem';
import CustomButton from '../components/CustomButton';

const screenWidth = Dimensions.get('screen').width;

const TaskListScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [tasks, setTasks] = useState([
    {
      userId: 1,
      id: 1,
      title: 'Title and Title',
      status: 'closed',
    },
    {
      userId: 2,
      id: 2,
      title: 'Title and Title2',
      status: 'done',
    },
    {
      userId: 3,
      id: 3,
      title: 'Title and Title3',
      status: 'open',
    },
    {
      userId: 4,
      id: 4,
      title: 'Title and Title4',
      status: 'closed',
    },
    {
      userId: 5,
      id: 5,
      title: 'Title5 and Title5',
      status: 'done',
    },
    {
      userId: 6,
      id: 6,
      title: 'Title and Title6',
      status: 'open',
    },
  ]);

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
            data={tasks}
            renderItem={({item, index}) => <TodoItem key={index} data={item} />}
          />
          <CustomButton
            title={'Add Task'}
            style={{marginTop: 24, marginBottom: 8}}
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
