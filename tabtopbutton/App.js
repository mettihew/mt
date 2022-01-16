import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tabs from './Tabs';
import Tabs2 from './Tabs2';


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Tabs" component={Tabs} />
      <Tab.Screen name="Tabs2" component={Tabs2} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;

