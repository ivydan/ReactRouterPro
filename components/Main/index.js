import React, { Component } from 'react';
import ReactDOM from 'react-dom';
debugger;
export default class Main extends Component{
	constructor(props) {
		super(props);
		
	}

    render(){
        return (
            <div>
                abc
                {this.props.chlidren}
            </div>
            )
    }
}