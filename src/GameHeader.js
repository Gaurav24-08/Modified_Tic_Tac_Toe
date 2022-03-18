import React, { Component } from 'react';
import './TicTacToe.css';
export class GameHeader extends Component{
    render(){
        return (
            <div>
                <div className="Game-header">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/tic-tac-toe-15-836405.png" className="Game-logo" alt="logo" />
                    <h1>Tic Tac Toe</h1>
                </div>
                <p className="Game-intro"> 
                </p>
            </div>
        );
    }
}