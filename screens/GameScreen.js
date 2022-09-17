import React from 'react';
import { View, Text } from 'react-native';
import PlayerHole from '../components/PlayerHole.js'

export default class GameScreen extends React.Component{

    render(){
      return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <PlayerHole />          
        </View>
      );
    }
  }