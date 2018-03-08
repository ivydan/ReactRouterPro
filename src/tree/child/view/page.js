import React, { Component } from 'react';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { Input, Button, Icon, Row, Col, Form } from 'antd';
import { branch } from 'baobab-react/higher-order';
import Commons from 'utils/common';
import actions from '../utils/action';

const FormItem = Form.Item;

const formItemLayout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 15 },
};

class About extends React.Component {
	constructor(props) {
		super(props);
		Commons.initComponent(this, { actions });

		_.bindAll(this, '_handleChangeLock',
						'_handleFormReset',
						'_handleSubmit')
	}

	_handleChangeLock(e) {
		let value = e.target.value;
		this.dispatch("changePassWord", value);
	}

	_handleFormReset(){

	}

	componentDidMount() {
	}

	_handleSubmit(e){
		e && e.preventDefault();
	}

	render() {
		let { getFieldDecorator } = this.props.form;
		return (
			<div className="child-bundle-container">
				<Form className="search-container" onSubmit={this._handleSubmit}>
					<FormItem {...formItemLayout} label="时间">
						{getFieldDecorator('date')(<Input />)}
					</FormItem>
					<FormItem {...formItemLayout} label="测试">
						{getFieldDecorator('test')(<Input />)}
					</FormItem>
					<FormItem {...formItemLayout} label="时间">
						{getFieldDecorator('date')(<Input />)}
					</FormItem>
					<FormItem {...formItemLayout} label="时间">
						{getFieldDecorator('date')(<Input />)}
					</FormItem>
					<FormItem className="search-btn">
						<Button type="primary" htmlType="submit">查询</Button>
						<Button style={{ margin: '0 4px' }} onClick={this._handleFormReset}>重置</Button>
					</FormItem>
				</Form>
				<div></div>

			</div>
		)
	}
}

const WrappedForm = withRouter(Form.create()(About));

export default branch({
	data: ['page']
}, WrappedForm)