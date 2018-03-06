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
	wrapperCol: { span: 16 },
};

class About extends React.Component {
	constructor(props) {
		super(props);
		Commons.initComponent(this, { actions });

		_.bindAll(this, '_handleChangeLock')
	}

	_handleChangeLock(e) {
		let value = e.target.value;
		this.dispatch("changePassWord", value);
	}

	componentDidMount() {
	}

	render() {
		let { getFieldDecorator } = this.props.form;
		return (
			<div className="child-bundle-container">
				<Form className="search-container">
					<Row gutter={16}>
						<Col span={8}>
							<FormItem {...formItemLayout} label="项目">
								{getFieldDecorator('project')(<Input />)}
							</FormItem>
						</Col>
						<Col span={8}>
							<FormItem {...formItemLayout} label="测试">
								{getFieldDecorator('test')(<Input />)}
							</FormItem>
						</Col>
						<Col span={8}>
							<FormItem {...formItemLayout} label="时间">
								{getFieldDecorator('date')(<Input />)}
							</FormItem>
						</Col>
					</Row>
				</Form>
			</div>
		)
	}
}

const WrappedForm = withRouter(Form.create()(About));

export default branch({
	data: ['page']
}, WrappedForm)