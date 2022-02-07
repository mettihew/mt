import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import card from './card';
import card1 from './card1';

const Stack = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={card} />
        <Stack.Screen name="Card" component={card1} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
