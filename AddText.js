import React from "react";
import {Text, TextInput, View, Button, FlatList} from 'react-native';

const thisismyappwhatisyourapp = () => {
  const [enteredGoal, setEnteredGoal] = React.useState('')
  const [courseGoals, setCourseGoals] = React.useState([])
  const goals = keyy => {
    setEnteredGoal(keyy)
  }
  const adds = () => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      {id: Math.random().toString(), value: enteredGoal}
    ])
  }
  return(
    <View>
      
    <TextInput style={{backgroundColor:'pink'}} onChangeText={goals} value={enteredGoal}/>
    <Button title="Add" onPress={adds}/>
    <View>
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <Text> {itemData.item.value} </Text>
        )}
        keyExtractor={(item,index) => item.id} />
    </View>
    </View>
  )
}
export default thisismyappwhatisyourapp;
