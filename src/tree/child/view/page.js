import React, { Component } from 'react';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { DatePicker, Select, Input, Button, Icon, Row, Col, Form, Table } from 'antd';
import { branch } from 'baobab-react/higher-order';
import Commons from 'utils/common';
import Reducer from '../utils/reducer';
import Ajax from '../utils/ajax';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;

const actions = Reducer.actions;

const formItemLayout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 15 },
};

class About extends React.Component {
	constructor(props) {
		super(props);
		Commons.initComponent(this, { actions });

		_.bindAll(this, '_handleFormReset',
			'_handleSubmit')
	}

	_handleChangeLock(e) {
		let value = e.target.value;
		this.dispatch("changePassWord", value);
	}

	_handleFormReset() {

	}

	componentDidMount() {
		this._handleLoad(Object.assign({}, this.props.form.getFieldsValue(), this.getData('pagination')));
	}

	_handleLoad(value) {
		Ajax.getDataList(value).then(res => {
			this.dispatch('setDataList', res)
		})
	}

	_handleSubmit(e) {
		e && e.preventDefault();
	}

	_renderColumns() {
		return [
			{ title: 'Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
			{ title: 'ID', width: 100, dataIndex: 'id'},
			{ title: 'code', dataIndex: 'code', width: 150 },
			{ title: 'Column 2', dataIndex: 'column1', width: 150 },
			{ title: 'Column 3', dataIndex: 'column2', width: 150 },
			{ title: 'Column 4', dataIndex: 'column3', width: 150 },
			{ title: 'Column 5', dataIndex: 'column4', width: 150 },
			{ title: 'Column 6', dataIndex: 'column5', width: 150 },
			{ title: 'Column 7', dataIndex: 'column6', width: 150 },
			{ title: 'Column 8', dataIndex: 'column7', width: 150 },
			{ title: 'Column 9', dataIndex: 'column8', width: 150 },
			{ title: 'Column 10', dataIndex: 'column8', key: '2', width: 150 },
			{ title: 'Column 10', dataIndex: 'column8', key: '3' },
			{
				title: 'Action',
				key: 'operation',
				fixed: 'right',
				width: 100,
				render: () => <a href="#">action</a>,
			},
		]
	}

	render() {
		let { getFieldDecorator } = this.props.form;
		let list = this.getData('list');
		console.log(this.getData('list'))
		return (
			<div className="child-bundle-container">
				<Form className="search-container" onSubmit={this._handleSubmit}>
					<FormItem {...formItemLayout} label="时间范围">
						{getFieldDecorator('date')(<RangePicker />)}
					</FormItem>
					<FormItem {...formItemLayout} label="产品编码">
						{getFieldDecorator('code')(<Input />)}
					</FormItem>
					<FormItem {...formItemLayout} label="产品名称">
						{getFieldDecorator('name')(
							<Select>
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="disabled" disabled>Disabled</Option>
								<Option value="Yiminghe">yiminghe</Option>
							</Select>
						)}
					</FormItem>
					<FormItem {...formItemLayout} label="选择">
						{getFieldDecorator('switch')(<Input />)}
					</FormItem>
					<FormItem className="search-btn">
						<Button type="primary" htmlType="submit">查询</Button>
						<Button style={{ margin: '0 4px' }} onClick={this._handleFormReset}>重置</Button>
					</FormItem>
				</Form>
				<div></div>
				<Table
					columns={this._renderColumns()}
					rowKey={v => v.id}
					dataSource={list}
					size="middle"
					pagination={{ pageSize: 20 }}
					scroll={{ x: 2000, y: 440 }}
				/>
			</div>
		)
	}
}

const WrappedForm = withRouter(Form.create()(About));

export default branch({
	data: ['page']
}, WrappedForm)