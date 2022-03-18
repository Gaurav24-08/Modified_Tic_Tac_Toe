import React, {Component} from 'react';
import './Player.css';
export class Player extends Component{
    constructor(props){
        super(props);
    }

    class = this.props.cName;


    render(){
        return (
            <div className={this.class}>
                <h2 className='player-name'>Player {this.props.playerNumber}</h2>

            </div>
        );
    }
}