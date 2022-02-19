import React, { useEffect, useState } from "react";
import { BackHandler, TextInput, SafeAreaView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [justValue, clearScreen] = useState('')
  const save = () => {
    AsyncStorage.setItem('key', justValue) 
    BackHandler.exitApp()
    return true;
  }
  const show = () => {
    AsyncStorage.getItem('key').then(clearScreen) 
  }
  useEffect(() => {
    show()
}, []);

 BackHandler.addEventListener( "hardwareBackPress", save );

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'black'}} >
      <TextInput placeholder="type somthing" style={{color:'white',flex:1}}
      value={justValue} onChangeText={clearScreen} 
      multiline={true} numberOfLines={25}/>
    </SafeAreaView>
  );
};
export default App;