import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.status}>
          <Text style={styles.statusText}>{data.status}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="pencil" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="trash-can" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.secondary,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
  },
  itemHeader: {},
  title: {},
  status: {},
  statusText: {},
  buttonsContainer: {},
});
