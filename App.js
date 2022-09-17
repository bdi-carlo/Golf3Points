import React from 'react';
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'
import SettingGameScreen from './screens/SettingGameScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>        
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="SettingGame" component={SettingGameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}