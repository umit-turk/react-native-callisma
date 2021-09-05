import React, { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screen/HomeScreen';
import LoginScreen from './src/Screen/LoginScreen';
import DetailScreen from './src/Screen/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorIcons from './src/Icons/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenName = {
  HomeScreen: "HomeScreen",
  DetailScreen: "DetailScreen",
  LoginScreen: "LoginScreen",
  root: "root"
}

function AuthStack(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={screenName.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  )
}
function UserStack(){
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
     
     <Stack.Group
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
      </Stack.Group> 
    </Stack.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
     
     <Stack.Group
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
      </Stack.Group> 
    </Stack.Navigator>
  );
}

function TabNavigator(){
  return (
    <Tab.Navigator
        screenOptions={route => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'blue',
          tabBarIcon: ({focused}) => {
            const {name} = route.route;
            let icon = "";
            if(name === screenName.HomeScreen){
              icon = "home-outline"
            }
            if(name === screenName.LoginScreen){
              icon = "chatbox-ellipses-outline"
            }
            if(name === screenName.DetailScreen){
              icon = "build-outline"
            }
            if(name === screenName.root){
              icon = "chatbox-ellipses-outline"
            }

            return <VectorIcons size={25} name={icon} focused={focused} />
          }

          
        })}>
          <Tab.Screen name={screenName.root} component={StackNavigator} options={{title: "Giriş yap"}} />
        <Tab.Screen
          name={screenName.HomeScreen}
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Anasayfa',
            tabBarBadge: 3,
            tabBarBadgeStyle: {backgroundColor: "pink"}
            // tabBarIcon: ({focused}) => (
            //   <VectorIcons size={25} name="home-outline" focused={focused} />
            // ),
          }}
        />
        <Tab.Screen
          name={screenName.DetailScreen}
          component={DetailScreen}
          initialParams={{text: 'yeni text'}}
          options={{
            title: 'Detay',
            // tabBarIcon: ({focused}) => (
            //   <VectorIcons size={25} name="build-outline" focused={focused} />
            // ),
          }}
        />
        {/* <Tab.Screen
          name={screenName.LoginScreen}
          component={LoginScreen}
          initialParams={{name: 'Umitcan', surname: 'turkcan'}}
          options={{
            title: 'Giriş',
            // tabBarIcon: ({focused}) => (
            //   <VectorIcons
            //     size={25}
            //     name="chatbox-ellipses-outline"
            //     focused={focused}
            //   />
            // ),
          }}
        /> */}
      </Tab.Navigator>
  )
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false)

  const getisLogin = async () => {
  const response =  await  AsyncStorage.getItem("projectKey");
  const responseOnject = JSON.parse(response)

    setIsLogin(responseOnject.isLogin)

  console.log("response",responseOnject);
  } 

  useEffect(() => {
    getisLogin()
  }, [])

  return (
    <NavigationContainer>
      {isLogin ? UserStack() : AuthStack()}
    </NavigationContainer>
  );
}
