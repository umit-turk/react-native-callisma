import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Favorite from './Favorite'
import Home from './Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Settings from './Settings'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainRoot() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions ={{
        tabBarActiveTintColor:"#333",
        tabBarInactiveTintColor: "#999"
        }} >
          <Tab.Screen options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }} name="Home" component={Home} />
          <Tab.Screen options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={22} />
          ),
        }} name="Favorite" component={Favorite} />
          <Tab.Screen options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={22} />
          ),
        }} name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
