import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from './Tabs';
import Tabs2 from './Tabs2';
import Tabs3 from './Tabs3';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home" activeColor="orange" inactiveColor="white" barStyle={{ backgroundColor: '#694fad' 
  
  
  }} >
      <Tab.Screen name="tab" component={Tabs} options={{ tabBarIcon: ({ color }) => ( <Icon name="home" color={color} size={26} /> ) }}/>
      <Tab.Screen name="b" component={Tabs2} options={{ tabBarIcon: ({ color }) => ( <Icon name="search" color={color} size={26} /> ) }}/>
      <Tab.Screen name="Fee" component={Tabs3} options={{ tabBarIcon: ({ color }) => ( <Icon name="user" color={color} size={26} /> ) }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;

