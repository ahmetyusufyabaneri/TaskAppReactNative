import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../themes/Colors';

const CustomInput = ({value, onChangeText, placeholder}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search-outline" size={28} color={Colors.primary} />
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={e => onChangeText(e)}
          placeholder={placeholder}
        />
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
    flex: 1,
    fontSize: 18,
  },
});
