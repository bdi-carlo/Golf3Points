import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  
  playPressed = ()=>{
    Alert.alert("A venir")
  }

  historyPressed = ()=>{
    Alert.alert("A venir")
  }
  
  render() {
    return (
      <ImageBackground
        source={require('./assets/wallpaper.png')}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Golf 3 Points</Text>
          <StatusBar style="auto" />

          <View style={styles.gridButtons}>
            <TouchableOpacity style={styles.btn} onPress={this.playPressed}>
                <Text style={styles.button}>JOUER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.historyPressed}>
                <Text style={styles.button}>HISTORIQUE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.historyPressed}>
                <Text style={styles.button}>JOUEURS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.historyPressed}>
                <Text style={styles.button}>STATS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
    }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  title: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: "25%",
    fontSize:  50,
  },
  gridButtons: {
    flex: 1,
  },
  button: {
    backgroundColor: '#3A59FF',
    color: 'white',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: "1%",
    fontSize:  27
  },
  container: {
    flex: 1
  },
});
