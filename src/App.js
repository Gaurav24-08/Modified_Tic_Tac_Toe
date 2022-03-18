import React, { Component } from 'react';
import './App.css';
import './TicTacToe.css';
import Game from './Game.js';
import { GameHeader } from './GameHeader';

class App extends Component {

  componentDidMount(){
    document.title = "tic-tac-toe";
  }
  render() {
    return (
      <div className="Tic-Tac-Toe">
        <GameHeader/>
        <div className="game-page">
          <Game/>
        </div>
      </div>
    );
  }
}

export default App;
