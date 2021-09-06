import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screen/HomeScreen';
import LoginScreen from './src/Screen/LoginScreen';
import DetailScreen from './src/Screen/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import VectorIcons from './src/Icons/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookScreen from './src/Screen/BookScreen';
import CartScreen from './src/Screen/CartScreen';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';
import ShoppingCartIcon from './src/components/ShoppingCartIcon/index';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const screenName = {
  HomeScreen: 'HomeScreen',
  DetailScreen: 'DetailScreen',
  LoginScreen: 'LoginScreen',
  root: 'root',
  book: "Book",
  cart: "Cart",
};

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenName.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
}
function UserStack() {
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

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={route => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'blue',
        tabBarIcon: ({focused}) => {
          const {name} = route.route;
          let icon = '';
          if (name === screenName.HomeScreen) {
            icon = 'home-outline';
          }
          if (name === screenName.LoginScreen) {
            icon = 'chatbox-ellipses-outline';
          }
          if (name === screenName.DetailScreen) {
            icon = 'build-outline';
          }
          if (name === screenName.root) {
            icon = 'chatbox-ellipses-outline';
          }

          return <VectorIcons size={25} name={icon} focused={focused} />;
        },
      })}>
      <Tab.Screen
        name={screenName.root}
        component={StackNavigator}
        options={{title: 'Giriş yap'}}
      />
      <Tab.Screen
        name={screenName.HomeScreen}
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Anasayfa',
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'pink'},
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
  );
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const getisLogin = async () => {
    const response = await AsyncStorage.getItem('projectKey');
    const responseOnject = JSON.parse(response);

    setIsLogin(responseOnject.isLogin);

    console.log('response', responseOnject);
  };

  useEffect(() => {
    getisLogin();
  }, []);

  return (
    <StoreProvider store={store}>
    <NavigationContainer>
      {/* {isLogin ? UserStack() : AuthStack()} */}
      <Drawer.Navigator
        screenOptions={{
          overlayColor: "#000090",
          swipeEdgeWidth: 20,
          drawerPosition: 'left',
          swipeEnabled: false,
          gestureEnabled: true,
          headerStyle: {backgroundColor: 'tomato'},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name={screenName.HomeScreen}
          component={HomeScreen}
          options={{
            title: 'Anasayfa',
            drawerIcon: ({focused}) => (
              <VectorIcons
                name={'home'}
                size={focused ? 25 : 20}
                color={focused ? 'tomato' : '#999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={screenName.DetailScreen}
          component={DetailScreen}
          options={{
            title: 'Detay',
            drawerIcon: ({focused}) => (
              <VectorIcons
                name={'albums'}
                size={focused ? 25 : 20}
                color={focused ? 'tomato' : '#999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={screenName.book}
          component={BookScreen}
          options={{
            title: 'Book',
            headerRight: (props) =>  <ShoppingCartIcon {...props} /> ,
            drawerIcon: ({focused}) => (
              <VectorIcons
                name={'book'}
                size={focused ? 25 : 20}
                color={focused ? 'tomato' : '#999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={screenName.cart}
          component={CartScreen}
          options={{
            title: 'Cart',
            drawerIcon: ({focused}) => (
              <VectorIcons
                name={'cart'}
                size={focused ? 25 : 20}
                color={focused ? 'tomato' : '#999'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    </StoreProvider>
  );
}
