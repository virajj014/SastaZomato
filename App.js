import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/LoginSignupScreens/WelcomeScreen';
import SignupScreen from './src/screens/LoginSignupScreens/SignupScreen';
import LoginScreen from './src/screens/LoginSignupScreens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import Userprofile from './src/screens/Userprofile';
import Productpage from './src/screens/Productpage';
import UserCart from './src/screens/UserCart';
import Placeorder from './src/screens/Placeorder';
import TrackOrders from './src/screens/TrackOrders';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name="welcomepage" component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="signup" component={SignupScreen}
          options={{
            headerShown: false,

          }}
        />
        <Stack.Screen name="login" component={LoginScreen}
          options={{
            headerShown: false,

          }}
        />

        <Stack.Screen name="home" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="userprofile" component={Userprofile}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="productpage" component={Productpage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="cart" component={UserCart}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="placeorder" component={Placeorder}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="trackorders" component={TrackOrders}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




// Category page
// cart page
// add to cart functionality
// track order page
// order history page
// payment gateway 


