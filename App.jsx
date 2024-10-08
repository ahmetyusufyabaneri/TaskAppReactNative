import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';
import ToastManager from 'toastify-react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
      <ToastManager />
    </NavigationContainer>
  );
};

export default App;
