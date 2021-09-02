import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs';
import BookDetail from './screens/BookDetail';
import Home from './screens/Home';


const theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, border: 'transparent'},
};

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
      >
        {/* Tabs */}
        <Stack.Screen name="Tab" component={Tabs} />

        <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
