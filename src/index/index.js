/**
 * @Page
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import route from './route';

export default class About extends Component{
	constructor(props) {
		super(props);
		
	}

    render(){
        return (
            <div>
                {route}
            </div>
            )
    }
}