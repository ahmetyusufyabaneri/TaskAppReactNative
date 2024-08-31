import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTaskScreen from '../screens/AddTaskScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SplashScreen from '../screens/SplashScreen';
import TaskListScreen from '../screens/TaskListScreen';
import ScreenNames from '../constants/ScreenNames';
import Colors from '../themes/Colors';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.splash}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background.primary,
        },
        headerTintColor: Colors.text,
        headerBackTitle: false,
      }}>
      <Stack.Screen name={ScreenNames.addTask} component={AddTaskScreen} />
      <Stack.Screen
        name={ScreenNames.onboarding}
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ScreenNames.splash}
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ScreenNames.taskList}
        component={TaskListScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
