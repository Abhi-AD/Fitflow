import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/Login';
import OTPPage from './components/OTP';
import RegisterScreen from './components/RegisterScreen';
import HomePage from './components/Home';
import CardDetails from './components/CardDetails';
import JoinWithCode from './components/JoinWithCode';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OTPScreen"
          component={OTPPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardDetails"
          component={CardDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JoinWithCode"
          component={JoinWithCode}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
