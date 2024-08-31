import {StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageKey from '../constants/AsyncStorageKey';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../constants/ScreenNames';

const SplashScreen = () => {
  const navigation = useNavigation();
  const checkOnboardingComplete = async () => {
    const onboardingComplete = await AsyncStorage.getItem(
      AsyncStorageKey.onboardingComplete,
    );

    if (onboardingComplete === 'true') {
      navigation.navigate(ScreenNames.taskList);
    } else {
      navigation.navigate(ScreenNames.onboarding);
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/splash-animation.json')}
        style={{flex: 1}}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          setTimeout(() => {
            checkOnboardingComplete();
          }, 800);
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
