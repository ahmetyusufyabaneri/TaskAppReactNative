import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';
import CustomInput from '../components/CustomInput';

const screenWidth = Dimensions.get('screen').width;

const TaskListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <SafeAreaView style={[styles.container, {marginBottom: 10}]}>
          <CustomInput />
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
});
