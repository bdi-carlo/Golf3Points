import React from "react";
import { View } from "react-native";
import CheckBox from "expo-checkbox"

export default class PlayerHole extends React.Component{
    constructor(){
        super();
        this.state = {
            score : 0,
            fairway : false,
            putter : 0
        }
    }

    setFairway(){
        console.log("test");
        this.state.fairway = true;
    }

    render(){
        return(
            <View>
                <CheckBox 
                    value={this.state.fairway}
                    onValueChange={this.setFairway(this)}/>
            </View>
        );
    }
}