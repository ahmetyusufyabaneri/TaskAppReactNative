import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusButton = ({name, size, color, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default StatusButton;

const styles = StyleSheet.create({});
