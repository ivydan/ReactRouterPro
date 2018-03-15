import React, { Component } from 'react';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { DatePicker, Select, Input, Button, Icon, Row, Col, Form, Modal } from 'antd';
import { branch } from 'baobab-react/higher-order';
import Commons from 'utils/common';
import Reducer from '../utils/reducer';
import Ajax from '../utils/ajax';
import LocalData from '../utils/local';

import Table from 'components/table';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;

const actions = Reducer.actions;

const formItemLayout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 15 },
};

class Child extends React.Component {
	constructor(props) {
		super(props);
		Commons.initComponent(this, { actions });

		_.bindAll(this, '_handleFormReset',
			'_handleSubmit',
			'_tableReload')
	}

	_handleChangeLock(e) {
		let value = e.target.value;
		this.dispatch("changePassWord", value);
	}

	_handleFormReset() {
		this.props.form.resetFields();
		let params = { pageNumber: 1 };
		let values = Object.assign({}, this.getData('pagination'), params);
		this.dispatch("setPaginationValue", values);
		this._handleLoad(values);
	}

	componentDidMount() {
		this._handleSubmit();
	}

	//form data reload
	_handleSubmit(e) {
		e && e.preventDefault();
		let values = Object.assign({}, this.props.form.getFieldsValue(), this.getData('pagination'));
		this._handleLoad(values);
	}

	//table paging
	_tableReload(params) {
		let values = Object.assign({}, this.props.form.getFieldsValue(), this.getData('pagination'), params);
		this.dispatch("setPaginationValue", params);
		this._handleLoad(values);
	}

	//send request
	_handleLoad(value) {
		this.dispatch('setLoading', true);
		Ajax.getDataList(value).then(res => {
			this.dispatch('setDataList', res);
			this.dispatch('setLoading', false);
		}).catch(err => {
			Modal.error({
				title: '错误提示',
				content: err,
			});
			this.dispatch('setLoading', false);
		})
	}

	_renderColumns() {
		return [
			{ title: <Icon type="plus" />, width: 100, dataIndex: 'name' },
			{ title: 'ID', width: 100, dataIndex: 'id' },
			{
				title: 'total', children: [
					{ title: 'code', dataIndex: 'code', key: "total1", width: 150 },
					{ title: 'page', dataIndex: 'column1', key: "total2", width: 150 },
					{ title: 'number', dataIndex: 'column2', key: "total3", width: 150 },
				]
			},
			{ title: '状态', dataIndex: 'status', width: 150, render: this._colStatus },
			{ title: 'Column 5', dataIndex: 'column4', width: 150 },
			{ title: 'Column 6', dataIndex: 'column5', width: 150 },
			{ title: 'Column 7', dataIndex: 'column6', width: 150 },
			{ title: 'Column 8', dataIndex: 'column7', width: 150 },
			{ title: 'Column 9', dataIndex: 'column8', width: 150 },
			{ title: 'Column 10', dataIndex: 'column8', key: 'columnKey01', width: 150 },
			{ title: 'Column 10', dataIndex: 'column8', key: 'DDDDDD3' },
			{
				title: 'Action',
				key: 'operation',
				fixed: 'right',
				width: 100,
				render: () => <a href="#">action</a>,
			},
		]
	}

	_colStatus(value, record, index){
		return Commons.getValueOfData(LocalData.publishStatus, value);
	}

	render() {
		let { getFieldDecorator } = this.props.form;
		let list = this.getData('list');
		let loading = this.getData('loading');
		let pagination = this.getData('pagination');
		let total = this.getData('total');
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
						<Button type="primary" htmlType="submit" loading={loading}>查询</Button>
						<Button style={{ margin: '0 4px' }} onClick={this._handleFormReset}>重置</Button>
					</FormItem>
				</Form>
				<div></div>
				<Table
					columns={this._renderColumns()}
					rowKey={v => v.id}
					bordered
					dataSource={list}
					loading={loading}
					pagination={pagination}
					total={total}
					getData={this._tableReload}
					scroll={{ x: 2000 }}
				/>
			</div>
		)
	}
}

const WrappedForm = withRouter(Form.create()(Child));

export default branch({
	data: ['page']
}, WrappedForm)