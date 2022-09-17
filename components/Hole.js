import React from "react";

export default class Hole extends React.Component{
    constructor(){
        super();
        this.state = {
            nbPlayers : this.props.nbPlayers,
            playerList : []
        }
    }
}