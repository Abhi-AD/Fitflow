import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons or any other icon library you prefer
import LoginPage from './components/Login';
import OTPPage from './components/OTP';
import RegisterScreen from './components/RegisterScreen';
import HomePage from './components/Home';
import CardDetails from './components/CardDetails';
import JoinWithCode from './components/JoinWithCode';
import Profile from './components/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="HomePage">
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
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // Adjust icon names based on your icon library
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline'; // Changed from 'log-in' to 'person' for a more appropriate icon
            } else if (route.name === 'JoinWithCode') {
              iconName = focused ? 'code-working' : 'code-working-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack}  />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="JoinWithCode" component={JoinWithCode} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
