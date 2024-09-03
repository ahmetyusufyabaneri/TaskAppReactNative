import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';

const CustomButton = ({title, style}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenNames.addTask)}
      style={[styles.button, style]}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
  },
  buttonTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
