import CheckBox from "expo-checkbox"
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function PlayerHole(props){
    const playerName = props.playerName;
    const [isFairway, setFairway] = useState(false);
    const [isRegul, setRegul] = useState(false);
    const [isCloser, setCloser] = useState(false);
    var [nbPutts, setPutts] = useState(2);
    var [nbShots, setShots] = useState(props.nbPar);
    var [score, setScore] = useState(0);

    useEffect(() => {updateScore();});

    function incrementPutts(){
        nbPutts = nbPutts + 1;
        setPutts(nbPutts);
    }

    function decrementPutts(){
        nbPutts > 0 ? nbPutts = nbPutts - 1 : null;
        setPutts(nbPutts);
    }

    function incrementShots(){
        nbShots = nbShots + 1;
        setShots(nbShots);
    }

    function decrementShots(){
        nbShots > 0 ? nbShots = nbShots - 1 : null;
        setShots(nbShots);
    }

    function updateScore(){
        score = 0;
        
        if(isFairway){score = score + 1;}
        if(isRegul){score = score + 3;}
        if(isCloser){score = score + 1;}

        if(nbPutts >= 3){score = score - 1;}
        else if(nbPutts == 1){score = score + 1;}
        else if(nbPutts == 0){score = score + 2;}

        if(nbShots >= props.nbPar+3){score = score - 1;}

        setScore(score > 0 ? score : 0);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.playerName}>{playerName}</Text>

            <CheckBox style={styles.checkBox}
                value={isFairway}
                onValueChange={setFairway}/>
            <CheckBox style={styles.checkBox}
                value={isRegul}
                onValueChange={setRegul}/>
            <CheckBox style={styles.checkBox}
                value={isCloser}
                onValueChange={setCloser}/>

            <View style={styles.plusMinusContainer}>
                <TouchableOpacity style={styles.plusMinusButton} onPress={incrementPutts}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
                <Text>{nbPutts}</Text>
                <TouchableOpacity style={styles.plusMinusButton} onPress={decrementPutts}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.plusMinusContainer}>
                <TouchableOpacity style={styles.plusMinusButton} onPress={incrementShots}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
                <Text>{nbShots}</Text>
                <TouchableOpacity style={styles.plusMinusButton} onPress={decrementShots}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.score}>{score}</Text>
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playerName: {
        margin: 10
    },
    checkBox: {
        width: 50,
        height: 50,
        margin: 10
    },
    plusMinusContainer: {
        alignItems: 'center',
        margin: 10,
    },
    plusMinusButton: {
        backgroundColor: '#3a5c8e',
        width: 50,
        height: 20,
        alignItems: 'center',
        fontWeight: 'bold'
    },
    textButton: {
        color: 'white',
        textAlign: 'center'
    },
    score: {
        margin: 10
    }
});