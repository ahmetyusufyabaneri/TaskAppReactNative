import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../themes/Colors';

const CustomInput = ({value, onChangeText, onPress, placeholder}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.inputContainer}>
        <Ionicons name="search-outline" size={28} color={Colors.primary} />
        {!onPress ? (
          <TextInput
            value={value}
            style={styles.input}
            onChangeText={e => onChangeText(e)}
            placeholder={placeholder}
          />
        ) : (
          <Text>{value}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  inputContainer: {
    backgroundColor: Colors.background.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  input: {
    fontSize: 18,
  },
});
