/**
 * @defaultIndex
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import './index.less';

class App extends Component{
	constructor(props){
		super(props);
	}

	_handleClick(){
		this.props.router.push('/about');
	}

    render(){
    	return <div className="sd-default-index">
			I am default Page!
			<div onClick={this._handleClick.bind(this)}>go to about</div>
        </div> 
    }
}

export default withRouter(App);