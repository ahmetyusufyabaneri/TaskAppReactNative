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
      title: 'Title2 and Title2',
      status: 'done',
    },
    {
      userId: 3,
      id: 3,
      title: 'Title3 and Title3',
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
