import React, { Component } from 'react';
import './App.css';
import './TicTacToe.css';
import Game from './Game.js';
import { GameHeader } from './GameHeader';
import { Player } from './Player';

class App extends Component {

  componentDidMount(){
    document.title = "tic-tac-toe";
  }
  render() {
    return (
      <div className="Tic-Tac-Toe">
        <GameHeader/>
        <div className="game-page">
          <div className="player1-ui"><Player playerNumber = {1} playerTurn = {true}/></div>
          <div className="game-div"><Game/></div>
            <div className="player2-ui"><Player playerNumber = {2} playerTurn = {true}/></div>
        </div>
      </div>
    );
  }
}

export default App;
