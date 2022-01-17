import React, { useCallback } from "react";
import { Button, Linking } from "react-native";

const App = () => {
  return (
     <Button title='open setting' onPress={useCallback(async () => {await Linking.openSettings()},[])}/>
  )
}
export default App;

import React, { useState } from "react";
import { Alert, Modal, Pressable, View } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
  <View style={{flex:1, backgroundColor:'gray',justifyContent:"center",alignItems:"center"}}>
  <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed."), setModalVisible(!modalVisible)}}>
    <Pressable style={{backgroundColor:'blue',padding:44}} onPress={() => setModalVisible(!modalVisible)}/> 
  </Modal> 
    <Pressable style={{ padding: 30, backgroundColor: 'green'}} onPress={() => setModalVisible(true)}/>
  </View>
  )
}
export default App;


import React, { useRef } from "react";
import { ActivityIndicator, Animated, Button, SafeAreaView } from "react-native";

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView>
      <ActivityIndicator size='large' color='blue'/>
      <Button title="click" onPress={() => alert('hey','hety')} />
        <Animated.View style={[ {padding:44,backgroundColor:'blue'}, { opacity: fadeAnim } ]}/>
        <Button title="Fade In View" onPress={()=>(Animated.timing(fadeAnim, { toValue: 1, duration: 1000 }).start())} />
        <Button title="Fade Out View" onPress={()=>(Animated.timing(fadeAnim, { toValue: 0, duration: 500 }).start())} />
    </SafeAreaView>
  );
}
export default App;