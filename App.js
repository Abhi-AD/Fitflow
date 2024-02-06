import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/Home';
import OTPPage from './components/OTP';
import IndexScreen from './components/Index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NextScreen"
          component={OTPPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
