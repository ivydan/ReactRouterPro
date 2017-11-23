import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Main extends Component{
	constructor(props) {
		super(props);
		
	}

    onClick(){
        console.log(this.props);
        debugger;
        this.props.history.push('/helpCenter');
    }

    render(){
        return (
            <div>
                Index
                <div onClick={this.onClick.bind(this)}>home</div>
            </div>
            )
    }
}