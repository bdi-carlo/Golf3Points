import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HomeScreen extends React.Component{
    super(){}

    gamePressed = ()=>{
      this.props.navigation.navigate('Game')
    }
  
    playersPressed = ()=>{
      Alert.alert("A venir")
    }
  
    historyPressed = ()=>{
      Alert.alert("A venir")
    }
  
    statsPressed = ()=>{
      Alert.alert("A venir")
    }
  
    render(){
      return(
        <ImageBackground
          source={require('../assets/wallpaper.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Golf 3 Points</Text>
            <StatusBar style="auto" />
  
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={this.gamePressed}>
                <Text style={styles.buttonText}>PARTIE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.playersPressed}>
                <Text style={styles.buttonText}>JOUEURS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.historyPressed}>
                <Text style={styles.buttonText}>HISTORIQUE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.statsPressed}>
                <Text style={styles.buttonText}>STATISTIQUES</Text>
              </TouchableOpacity>
            </View>
          
          </View>
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
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
    buttonsContainer: {
      flex: 1
    },
    button: {
      flex: 1,
      backgroundColor: '#664727',
      textAlign: 'center',
      borderRadius: 10,
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      margin: '1%'
    },
    buttonText: {
      color: 'white',
      fontSize:  27,
      textAlign: 'center',
    }
  });