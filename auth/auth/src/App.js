import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegistirScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lightTheme } from './screens/themes/light';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={lightTheme}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
