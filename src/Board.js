import React, { Component } from 'react';
import './Board.css';
import {isValidNumber} from './IsValidNumber';
import Player from './Enum';
import { calculateWinner } from './CalculateWinner';
import update from 'react-addons-update';
class Board extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      data : new Array(9),
      isDisabled : new Array(9),
      numbersUsed : new Set(),
      enteredPlayer : new Array(9),
      turn : 1
    }

    this.setBlockValue = this.setBlockValue.bind(this);
  }
  

  setBlockValue = (ev) => {
    let val = isValidNumber(ev.target.value, this.state.numbersUsed);
    if(!val){
    alert("Please enter a number between 1 to 9 that has not used before");
    document.getElementById(ev.target.id).value = '';
    return;
    }
    //take entered input in data
    let updateData = this.state.data;
    let updateElement = updateData[ev.target.id-1];
    updateElement = ev.target.value;
    updateData[ev.target.id-1] = updateElement;

    //make corresponding block disabled for further use
    let isDisabled = this.state.isDisabled;
    let dis = isDisabled[ev.target.id-1];
    dis = true;
    isDisabled[ev.target.id-1] = dis;

    // add entered value to set
    let numbersUsed = this.state.numbersUsed;
    numbersUsed.add(ev.target.value);

    //mark current box as which player has entered player 1 or player 2
    let enteredPlayer = this.state.enteredPlayer;
    let enteredPlayerAtIndexId = enteredPlayer[ev.target.id-1];
    enteredPlayerAtIndexId = this.state.turn;
    enteredPlayer[ev.target.id-1] = enteredPlayerAtIndexId;

    //finally change state with all the changes to rerender the component
    
    this.setState({
      data : updateData,
      isDisabled: isDisabled,
      numbersUsed: numbersUsed,
      turn: (this.state.turn+1)%2
    })

    // this.setState(update(this.state,{
    //   data : {
    //     [ev.target.id] : {
    //       $set : ev.target.value
    //     }
    //   }
    // }))


    let winner = calculateWinner(this.state.data,this.state.enteredPlayer);
    if(winner!=null){
      alert("Winner is player ", winner);
    }
  }

  render() {
    return (
      <div className="game-board">
        <table className="board-table">
          <tr>
            <td className="board-block"><input id = {1} type={Number}  disabled = {this.state.isDisabled[0]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            <td className="board-block"><input id = {2} type={Number}  disabled = {this.state.isDisabled[1]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            <td className="board-block"><input id = {3} type={Number}  disabled = {this.state.isDisabled[2]} onInput = {ev => this.setBlockValue(ev)}></input></td>
          </tr>
          <tr>
            <td className="board-block"><input id = {4} type={Number}  disabled = {this.state.isDisabled[3]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            <td className="board-block"><input id = {5} type={Number}  disabled = {this.state.isDisabled[4]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            <td className="board-block"><input id = {6} type={Number}  disabled = {this.state.isDisabled[5]} onInput = {ev => this.setBlockValue(ev)}></input></td>
          </tr>
          <tr>
            <td className="board-block"><input id = {7} type={Number}  disabled = {this.state.isDisabled[6]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            <td className="board-block"><input id = {8} type={Number}  disabled = {this.state.isDisabled[7]} onInput = {ev => this.setBlockValue(ev)}></input></td>
            <td className="board-block"><input id = {9} type={Number}  disabled = {this.state.isDisabled[8]} onInput = {ev => this.setBlockValue(ev)}></input></td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Board;