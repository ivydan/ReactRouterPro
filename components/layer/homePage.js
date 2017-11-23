/**
 * @defaultIndex
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
debugger;
class App extends Component{
	constructor(props){
		super(props);

		this.state={
			num: ""
		}

	}

    render(){

    	let { num } = this.state;
        return <div className="sd-default-index">
			I am default Page!
        </div> 
    }
}

export default App;