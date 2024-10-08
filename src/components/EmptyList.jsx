import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EmptyList = () => {
  return (
    <View style={styles.emptyListContainer}>
      <MaterialCommunityIcons
        name="text-box-remove"
        size={60}
        color={Colors.gray}
      />
      <Text style={styles.emptyListText}>Empty Task</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  emptyListText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray,
  },
});
