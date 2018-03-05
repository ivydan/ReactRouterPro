import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import { Input, Button, Icon, Form, Modal } from 'antd';
import _ from 'lodash';

import Commons from 'utils/common';
import Utils from 'utils/common/utils';
import actions from '../utils/action';
import Ajax from '../utils/ajax';

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        Commons.initComponent(this, { actions });
        _.bindAll(this, '_handleClickSubmit');
    }

    _handleClickSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            Ajax.onLogin(values).then(res => {
                Utils.setCookie('username', '11');
                this.props.router.replace('/');
            }).catch(err => {
                Modal.error({
                    title: "提示",
                    content: err || "服务器请求失败，请重试！"
                })
            });
        })
    }

    render() {
        let { getFieldDecorator } = this.props.form;
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
                                <Form onSubmit={this.handleSubmit}>
                                    <FormItem>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: '请输入用户名!' }],
                                        })(
                                            <Input
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="请输入用户名"
                                            />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: '请输入密码!' }],
                                        })(
                                            <Input
                                                placeholder="请输入密码"
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                type="password"
                                            />
                                        )}
                                    </FormItem>
                                </Form>
                                <Button
                                    type="primary"
                                    style={{ width: '100%', marginTop: 15 }}
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

const WrappedForm = withRouter(Form.create()(Login));

export default branch({
    data: ['page']
}, WrappedForm);