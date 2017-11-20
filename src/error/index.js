/**
/**
 * @Error
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.less';

export default class About extends Component{
	constructor(props) {
		super(props);
		
	}

    render(){
        return (
            <div className="SdError">
                <div className="ani-rotate-t">
                    <span className="t-content">TS</span>
                    <span className="t1 t-common"></span>
                    <span className="t2 t-common"></span>
                    <span className="t3 t-common"></span>
                </div>
                <div className="error-content">页面访问出错，请检查链接！</div>
            </div>
            )
    }
}