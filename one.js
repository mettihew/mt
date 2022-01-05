import React, { useEffect, useState } from 'react';
import { View, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const App = () => {
 const [isEnabled, setIsEnabled] = useState();
 
 const getTheme = async () => {
   try {
     const theme = await AsyncStorage.getItem('theme');
     return theme;
   } catch(error) {
     console.log('error', error);
   };
 };
 
 const setTheme = async (theme) => {
   try {
     await AsyncStorage.setItem('theme', theme);
   } catch(error) {
     console.log('error', error);
   };
 };
 
 useEffect(() => {
   getTheme()
   .then(res => {
     setIsEnabled(res === 'light');
   })
   .catch(err => {
     console.log('error', err);
   });
 }, []);
 
 const onChangeHandler = (value) => {
   if (value) {
     setIsEnabled(true);
     setTheme('light');
   } else {
     setIsEnabled(false);
     setTheme('dark');
   };
 };
 
 return (
   <View style={{flex: 1, backgroundColor: `${isEnabled ? '#fff' : '#222'}`}}>
     <Switch onValueChange={onChangeHandler} value={isEnabled} />
   </View>
 );
};
export default App;