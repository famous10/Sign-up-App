import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './navigation/Home';
import SignInComponent from './navigation/SignInComponent';
import SignOutComponent from './navigation/SignOutComponent'

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
       screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="SignInComponent" component={SignInComponent} /> 
         <Stack.Screen name="SignOutComponent" component={SignOutComponent} />
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


export default App;