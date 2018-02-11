/*
 * @Author: Maggie 
 * @Date: 2018-01-08 11:25:13 
 * @Last Modified by: Maggie
 * @Last Modified time: 2018-01-09 14:48:03
 * @Content: Login Page
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import { Input, Button, Icon } from 'antd';
import './index.less';
import _ from 'lodash';
import DataStore from './utils/store';
import Actions from './utils/action';

export default class Login extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = DataStore;
        this.state = {
            value: ''
        }
        _.bindAll(this, '_handleChangeLock',
                        '_handleClickSubmit')
    }

    _handleChangeLock(e) {
        let value = e.target.value;
        this.setState({
            value
        })
    }

    _handleClickSubmit(){
        console.log(this.state.value)
    }

    render() {
        let { value } = this.state;
        return (
            <div className="sd-login-container">
                {/* <div className="login-animation">
                    <span className="animation-top"></span>
                    <span className="animation-right"></span>
                    <span className="animation-left"></span>
                    <span className="animation-bottom"></span>
                </div> */}
                <div className="login-form">
                    <div className="ele">
                        <div className="ele-e"></div>
                    </div>
                    <div className="ele ele-bottom">
                        <div className="ele-e"></div>
                    </div>
                    <div className="ele-input">
                        <div className="ele-title">
                            登录
                        </div>
                        <Input
                            placeholder="Enter your username"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            value="Maggie"
                            readOnly
                        />
                        <br />
                        <br />
                        <Input
                            placeholder=""
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            value={value}
                            type="password"
                            onChange={this._handleChangeLock}
                        />
                        <br />
                        <br />
                        <br />
                        <Button 
                            type="primary" 
                            style={{width: '100%'}}
                            onClick={this._handleClickSubmit}>提交</Button>
                    </div>
                </div>
            </div>
        )
    }
}