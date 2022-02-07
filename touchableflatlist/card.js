import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import card1 from './card1';


const Card = ({navigation}) => {
  return(
    <SafeAreaView style={styles.safe}>
      <View style={{flexDirection:'row',}}>
      <TouchableOpacity style={styles.touch} onPress={() => navigation.push('Card')}>
        <Text style={{color:'white'}}> first level </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <Text style={{color:'white'}}> two level </Text>
      </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <TouchableOpacity style={styles.touch}>
        <Text style={{color:'white'}}> tree level </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <Text style={{color:'white'}}> four level </Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safe:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  touch:{
    backgroundColor:'#999',
     width:200, height:200,
      alignItems:'center',
      justifyContent:'space-around',
      margin: 11
  }
})
export default Card;