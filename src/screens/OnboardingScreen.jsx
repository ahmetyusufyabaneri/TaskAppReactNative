import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageKey from '../constants/AsyncStorageKey';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';

const screenWidth = Dimensions.get('screen').width;

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem(AsyncStorageKey.onboardingComplete, 'true');
    navigation.navigate(ScreenNames.addTask);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ellipseBackground}>
        <View style={styles.inlineContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/task.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.title}>Let's Start</Text>
        <TouchableOpacity
          onPress={handleOnboardingComplete}
          style={styles.buttonContainer}>
          <MaterialCommunityIcons name="plus" size={60} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    alignItems: 'center',
  },
  ellipseBackground: {
    width: screenWidth,
    height: '75%',
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: screenWidth / 2,
    borderBottomRightRadius: screenWidth / 2,
    transform: [{scaleX: 1.5}],
  },
  inlineContainer: {
    width: screenWidth,
    height: '100%',
    position: 'absolute',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  image: {
    width: 350,
    height: 350,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    alignItems: 'center',
    gap: 40,
  },
  title: {
    color: Colors.white,
    fontSize: 38,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    width: 80,
    height: 80,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
