import React from 'react';
import GameSetup from './GameSetup';
import { Player } from './Player';
import './App.css';
class Game extends React.Component {

  render() {

    return (
      <div className="game">
        <div className="player-ui"><Player cName= 'player1' playerNumber= {1} playerTurn = {true}/></div>
        <div className="game-div">
          <GameSetup/>
        </div>
      <div className="player-ui"><Player cName = 'player2' playerNumber= {2} playerTurn = {true}/></div>
      </div>
    );
  }
}

export default Game;