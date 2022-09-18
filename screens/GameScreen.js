import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PlayerHole from '../components/PlayerHole.js'

export default class GameScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      nbPlayers : 3,
      playerList : [{name: "Nicolas"}, {name: "Bernard"}, {name: "Benjy"}]
    }
  }

  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row', marginTop: '25%'}}>
        <View style={styles.titlesContainer}>
          <Text style={styles.playerName}>Joueurs</Text>

          <Text style={styles.boxFairway}>Fairway</Text>
          <Text style={styles.boxRegul}>Regul</Text>
          <Text style={styles.boxBest}>Meilleur</Text>

          <Text style={styles.puttsField}>Putts</Text>
          <Text style={styles.shotsField}>Coups</Text>

          <Text style={styles.score}>Score</Text>
        </View>
        <FlatList
          numColumns={Math.ceil(this.state.playerList.length)}
          data={this.state.playerList}
          renderItem={({item}) => <PlayerHole playerName={item.name} nbPar={3} />}
        />
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  titlesContainer: {
    backgroundColor: '#CFDCC3'
  },
  playerName: {
      margin: 10,
      fontWeight: 'bold'
  },
  boxFairway: {
    margin: 10,
    marginTop: 30,
    fontWeight: 'bold'
  },
  boxRegul: {
    margin: 10,
    marginTop: 40,
    fontWeight: 'bold'
  },
  boxBest: {
    margin: 10,
    marginTop: 40,
    fontWeight: 'bold'
  },
  puttsField: {
    margin: 10,
    marginTop: 45,
    fontWeight: 'bold'
  },
  shotsField: {
    margin: 10,
    marginTop: 50,
    fontWeight: 'bold'
  },
  score: {
      margin: 10,
      marginTop: 25,
      fontWeight: 'bold'
  }
});