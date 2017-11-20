
import React from 'react';
import Branch from '../branch';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './index.less';

class About extends React.Component{
	constructor(props) {
		super(props);
		_.bindAll(this, '_handleLogout', '_handleClearCookie')
	}

	_handleLogout(){
		this._handleClearCookie();
		this.props.router.push('/');
	}

	_handleClearCookie(){ 
		var keys=document.cookie.match(/[^ =;]+(?=\=)/g); //match检索值
		
		if (keys) { //清空Cookie的方式是清空数字并将cookie有效期设为当前时间。
			for (var i = keys.length; i--;){
				document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
			}
		} 
	} 

    render(){
        return (
            <header className="sd-Header">
                <span>Header内容区</span>
                <span className="logout" onClick={this._handleLogout}>退出</span>
            </header>
            )
    }
}

export default Branch(About);