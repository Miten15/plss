// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import OTPScreen from './OTPScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{ headerTitle: 'Enter Your Phone Number', headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
