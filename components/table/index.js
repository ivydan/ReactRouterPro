import React, { Component } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import { Table, Icon } from 'antd';
import ExportExc from './exportExc';

import './index.less';

//explain
//usage
{/* <Table
        columns={this._renderColumns()}
        rowKey={v => v.id}
        dataSource={list}
        loading={loading}
        pagination={pagination}
        total={total}
        getData={this._tableReload}
        scroll={{ x: 2000 }}
    /> */}
//suggest: do not set up scroll（y）。table will adaptive height

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        _.bindAll(this, '_getPagination',
            '_renderFooter',
            '_exportDowload');
    }

    static defaultProps = {

    }

    componentDidMount() {
        this._initTableScrollY();
    }

    //init table height
    _initTableScrollY() {
        let refTable = ReactDom.findDOMNode(this.refs.table);
        // save ref for Table Body to reset scrollTop
        this.refTBody = refTable.querySelector('.ant-table-body');
        //get table rect
        let tableRect = refTable.getBoundingClientRect();
        //get visible range height
        let cH = document.body.clientHeight;
        // tableRect.top (Table Top Value)- except content(height-33) - pagination
        let scrollY = cH - tableRect.top - (tableRect.height - 33) - 55;
        //reset content scroll Y
        this.setState({
            scrollY: scrollY < 245 ? 245 : scrollY
        })
    }

    //export file
    _exportDowload() {
        let { columns, dataSource } = this.props;
        ExportExc.saveFile(columns, dataSource)
    }

    //render Footer
    _renderFooter() {
        let { footer, isExport, dataSource } = this.props;

        let exportConent = <span title="导出" className="export-container" onClick={this._exportDowload}>
            <Icon type="export" />
        </span>;

        if (isExport === false) {
            if (footer) return typeof footer !== 'function' ? { footer: () => footer } : { footer }
        } else {
            if (footer) {
                return {
                    footer: () => {
                        return [{ exportConent }, (typeof footer !== 'function') ? footer() : footer]
                    }
                }
            } else {
                return { footer: () => exportConent }
            }
        }
        return {};
    }

    render() {
        let { scroll, loading } = this.props;
        let { scrollY } = this.state;

        if (!scroll.y && scrollY) {
            scroll.y = scrollY
        }

        //Init Loading
        if (loading) {
            this._scrollToOrigin();
        }

        //Init Footer
        let currentFooter = this._renderFooter();

        return (
            <Table
                ref="table"
                size="middle"
                className="reseal-table"
                {...this.props}
                {...currentFooter}
                pagination={this._getPagination()}
                scroll={scroll}
            />
        )
    }

    _getPagination() {
        let { pageNumber, pageSize } = this.props.pagination;
        let { getData, total } = this.props;

        return {
            current: pageNumber,
            pageSize: pageSize,
            total: total,
            pageSizeOptions: ["30", "50", "100"],
            showSizeChanger: true,
            onShowSizeChange: (current, pageSize) => {
                getData({
                    pageNumber: 1,
                    pageSize: pageSize
                });
            },
            onChange: (pageNumber) => {
                getData({ pageNumber });
            }
        }
    }

    //scroll to the original position
    _scrollToOrigin() {
        let { refTBody } = this;
        if (!refTBody) {
            return;
        }

        if (refTBody) {
            refTBody.scrollTop = 0;
            refTBody.scrollLeft = 0;
        }

    }
}