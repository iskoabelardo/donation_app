import React, { useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeIcon, UserIcon} from 'react-native-heroicons/solid'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../tabs/Home';
import Profile from '../tabs/Profile';
import { useNavigation } from '@react-navigation/native'
// Import other screens here if needed

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
        headerShown: false, 
        tabBarStyle: { height: 60},
      }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <HomeIcon size={30}color={focused ? '#75BAA4' : '#C3C5C8'} /> 
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <UserIcon size={30}color={focused ? '#75BAA4' : '#C3C5C8'} /> 
        ),
      }}/>
    </Tab.Navigator>
  );
}
export default Tabs;
