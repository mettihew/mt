import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from './Tabs';
import Tabs2 from './Tabs2';
import Tabs3 from './Tabs3';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Tabs} options={{tabBarIcon: () => <Icon name="home" size={33} />}}/>
      <Tab.Screen name="thisi is Tabs3" component={Tabs3} options={{tabBarIcon: () => <View style={{height:55,width:55,borderColor:'orange',justifyContent:'center',top:-35,alignItems:'center',borderWidth:2,borderRadius:30}}><Icon name="cut" size={33} color={'red'} /></View>}}/>
      <Tab.Screen name="Hah this is Tabs2" component={Tabs2} options={{tabBarIcon: () => <Icon name="search" size={33} /> }}/>

    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;

