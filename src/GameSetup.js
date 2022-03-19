import React, { Component } from 'react';
import './GameSetup.css';
import {isValidNumber} from './IsValidNumber';
import { calculateWinner } from './CalculateWinner';


class GameSetup extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      data : new Array(9),
      isDisabled : new Array(9),
      numbersUsed : new Set(),
      enteredPlayer : new Array(9),
      turn : 0
    }

    this.setBlockValue = this.setBlockValue.bind(this);
  }
  

  setBlockValue = (ev) => {
    let val = isValidNumber(ev.target.value, this.state.numbersUsed);
    if (!val) {
      alert("Please enter a number between 1 to 9 that has not used before");
      document.getElementById(ev.target.id).value = '';
      return;
    }
    //take entered input in data
    let updateData = this.state.data;
    let updateElement = updateData[ev.target.id - 1];
    updateElement = ev.target.value;
    updateData[ev.target.id - 1] = updateElement;

    //make corresponding block disabled for further use
    let isDisabled = this.state.isDisabled;
    let dis = isDisabled[ev.target.id - 1];
    dis = true;
    isDisabled[ev.target.id - 1] = dis;

    // add entered value to set
    let numbersUsed = this.state.numbersUsed;
    numbersUsed.add(ev.target.value);

    //mark current box as which player has entered player 1 or player 2
    let enteredPlayer = this.state.enteredPlayer;
    let enteredPlayerAtIndexId = enteredPlayer[ev.target.id - 1];
    enteredPlayerAtIndexId = this.state.turn;
    enteredPlayer[ev.target.id - 1] = enteredPlayerAtIndexId;

    //finally change state with all the changes to rerender the component
    this.setState({
      data: updateData,
      isDisabled: isDisabled,
      numbersUsed: numbersUsed,
      enteredPlayer:enteredPlayer,
      turn: (this.state.turn + 1) % 2
    });

    let winner = calculateWinner(this.state.data, this.state.enteredPlayer);
    if (winner != null) {
      alert("Player " + Number(winner+1) + " won the game");
      location.reload();
    }
  };

  render() {
    return (
      <div className="game-board">
        <table className="board-table">
          <tbody className="board-table-body">
            <tr>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[0] == 0?'P1':'P2')} id = {1} type={Number}  disabled = {this.state.isDisabled[0]} onInput = {ev => this.setBlockValue(ev)}></input></td>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[1] == 0?'P1':'P2')} id = {2} type={Number}  disabled = {this.state.isDisabled[1]} onInput = {ev => this.setBlockValue(ev)}></input></td>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[2] == 0?'P1':'P2')} id = {3} type={Number}  disabled = {this.state.isDisabled[2]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            </tr>
            <tr>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[3] == 0?'P1':'P2')} id = {4} type={Number}  disabled = {this.state.isDisabled[3]} onInput = {ev => this.setBlockValue(ev)}></input></td>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[4] == 0?'P1':'P2')} id = {5} type={Number}  disabled = {this.state.isDisabled[4]} onInput = {ev => this.setBlockValue(ev)}></input></td>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[5] == 0?'P1':'P2')} id = {6} type={Number}  disabled = {this.state.isDisabled[5]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            </tr>
            <tr>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[6] == 0?'P1':'P2')} id = {7} type={Number}  disabled = {this.state.isDisabled[6]} onInput = {ev => this.setBlockValue(ev)}></input></td>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[7] == 0?'P1':'P2')} id = {8} type={Number}  disabled = {this.state.isDisabled[7]} onInput = {ev => this.setBlockValue(ev)}></input></td>
              <td className="board-block"><input autoComplete="off" className = {(this.state.enteredPlayer[8] == 0?'P1':'P2')} id = {9} type={Number}  disabled = {this.state.isDisabled[8]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            </tr>
          </tbody>
          
        </table>
      </div>
    );
  }
}
export default GameSetup;