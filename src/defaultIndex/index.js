/**
 * @defaultIndex
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class App extends Component{
	constructor(props){
		super(props);

		// _.bindAll(this, "",
		// 				);

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