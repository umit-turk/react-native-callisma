import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screen/HomeScreen';
import LoginScreen from './src/Screen/LoginScreen';
import DetailScreen from './src/Screen/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {backgroundColor: 'tomato'},
          headerLeft: () => (
            <Button title="Info" onPress={() => alert('Info')} />
          ),
          headerBackTitleStyle: {color: 'white'},
          headerRight: () => (
            <Button
              title="sepeti boşalt"
              onPress={() => alert('sepeti boşalt')}
              color="white"
            />
          ),
        }}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Giriş yap',
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Anasayfa'}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{title: 'Detail'}}
          initialParams={{age: 35, isShowTitle: false}}
        />
        <Stack.Screen name="CustomStack">
          {props =>
          <HomeScreen 
          {...props}
          extraData={[
            {title: "extradata"},
            {title: "extradata"},
            {title: "extradata"},
          ]}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
