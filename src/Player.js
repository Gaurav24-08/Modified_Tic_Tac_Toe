import React, {Component} from 'react';

export class Player extends Component{
    constructor(props){
        super(props);
    }
    turnMessage = this.props.playerTurn ? "YOUR TURN !!!" : "";
    render(){
        return (
            <div>
                <h2>Player {this.props.playerNumber}</h2>
                <h2>{this.turnMessage}</h2>
            </div>
        );
    }
}