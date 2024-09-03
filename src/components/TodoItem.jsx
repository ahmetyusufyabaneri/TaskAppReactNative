import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const TodoItem = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text
          style={[
            styles.title,
            data.status === 'closed' && {textDecorationLine: 'line-through'},
          ]}>
          {data.title}
        </Text>
        <View
          style={[
            styles.status,
            {
              backgroundColor:
                data.status === ('open' || 'progress')
                  ? Colors.background.green
                  : Colors.background.orange,
            },
          ]}>
          <Text style={styles.statusText}>{data.status}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="pencil"
              size={34}
              color={Colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="trash-can"
              size={34}
              color={Colors.red}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemFooter}>
        <View>
          <Text style={styles.dateTitle}>Start Date</Text>
          <View style={styles.dateContainer}>
            <Octicons name="clock" size={16} color={Colors.primary} />
            <Text style={styles.date}>10.06.2024 - 13:40</Text>
          </View>
        </View>
        <View>
          <Text style={styles.dateTitle}>End Date</Text>
          <View style={styles.dateContainer}>
            <Octicons name="clock" size={16} color={Colors.primary} />
            <Text style={styles.date}>20.07.2024 - 05:40</Text>
          </View>
        </View>
      </View>
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
    flexDirection: 'column',
    gap: 20,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  status: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  statusText: {
    color: Colors.text.primary,
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  date: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
});
