import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {COLORS, icons} from '../constans';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLable: false,
  style: {
    height: '10',
    backroundColor: COLORS.black,
  },
};
const Tabs = () => {
    return (
  <Tab.Navigator
    defaultScreenOptions={tabOptions}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        const tintColor = focused ? COLORS.white : COLORS.gray;

        switch (route.name) {
          case 'Home':
            return (
              <Image
                source={icons.dashboard_icon}
                resizeMode="contain"
                style={{
                  tintColor: tintColor,
                  width: 25,
                  height: 25,
                }}
              />
            );
          case 'Search':
            return (
              <Image
                source={icons.search_icon}
                resizeMode="contain"
                style={{
                  tintColor: tintColor,
                  width: 25,
                  height: 25,
                }}
              />
            );
          case 'Notification':
            return (
              <Image
                source={icons.notification_icon}
                resizeMode="contain"
                style={{
                  tintColor: tintColor,
                  width: 25,
                  height: 25,
                }}
              />
            );

          case 'Setting':
            return (
              <Image
                source={icons.menu_icon}
                resizeMode="contain"
                style={{
                  tintColor: tintColor,
                  width: 25,
                  height: 25,
                }}
              />
            );
        }
      },
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Home } />
    <Tab.Screen name="Notification" component={Home} />
    <Tab.Screen name="Setting" component={Home} />
  </Tab.Navigator>);
};
export default Tabs;
