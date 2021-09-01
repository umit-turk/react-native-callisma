import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import MainRoot from './app/pages/MainRoot';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="MainRoute" component={MainRoot} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
