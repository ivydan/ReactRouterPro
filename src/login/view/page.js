import React, { Component } from 'react';
import _ from 'lodash';
import { Input, Button, Icon } from 'antd';
import { branch } from 'baobab-react/higher-order';
import Commons from 'utils/common';
import actions from '../utils/action';

class Login extends Component {
    constructor(props) {
        super(props);

        Commons.initComponent(this, { actions });

        _.bindAll(this, '_handleChangeLock',
            '_handleClickSubmit')
    }

    _handleChangeLock(e) {
        let value = e.target.value;
        this.dispatch("changePassWord", value);
    }

    _handleClickSubmit() {
        console.log(this.getData("password"))
    }

    render() {
        let username = this.getData("username");
        let password = this.getData("password");

        return (
            <div className="sd-login-container">
                {/* <div className="login-animation">
                    <span className="animation-top"></span>
                    <span className="animation-right"></span>
                    <span className="animation-left"></span>
                    <span className="animation-bottom"></span>
                </div> */}
                <div className="login-title">
                    <span>
                        云计算平台
                    </span>
                    <div className="head-right"></div>
                </div>
                <div className="login-container">
                    <div className="container-width">
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
                                    value={username}
                                    placeholder="请输入用户名"
                                    readOnly
                                />
                                <br />
                                <br />
                                <Input
                                    placeholder="请输入密码"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    value={password}
                                    type="password"
                                    onChange={this._handleChangeLock}
                                />
                                <br />
                                <br />
                                <br />
                                <Button
                                    type="primary"
                                    style={{ width: '100%' }}
                                    onClick={this._handleClickSubmit}>提交</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login-footer">
                    -----20180212-----
                </div>
            </div>
        )
    }
}

export default branch({
    data: ['page']
}, Login)