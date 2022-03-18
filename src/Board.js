import React, { Component } from 'react';
import './Board.css';
import {isValidNumber} from './IsValidNumber';
class Board extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      data : new Array(9),
      isDisabled : new Array(9),
      numbersUsed : new Set()
    }
  }
  
  setBlockValue = (ev) => {
    let val = isValidNumber(ev.target.value, this.state.numbersUsed);
    
    let data = [...this.state.data];
    let d = {...data[ev.target.id-1]};
    d = ev.target.value;
    data[ev.target.id-1] = d;
    let isDisabled = [...this.state.isDisabled];
    let dis = {...isDisabled[ev.target.id-1]};
    dis = true;
    isDisabled[ev.target.id-1] = dis;
    let numbersUsed = this.state.numbersUsed;
    numbersUsed.add(ev.target.value);
    this.setState({
      data,
      isDisabled,
      numbersUsed
    })

    console.log("My message",this.state.isDisabled[ev.target.id-1])
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