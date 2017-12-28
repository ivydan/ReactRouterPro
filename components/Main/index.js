import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { withRouter } from 'react-router';
import Ajax from './utils/ajax';

import Logo from '../layout/logo';
import Header from '../layout/header';
import Slider from '../layout/slider';
import PageTab from '../layout/pageTab';
import './index.less'

class Main extends Component {
    constructor(props) {
        super(props);
        _.bindAll(this, '_handleChangeTabs',
            '_handleOnClose')
        this.state = {
            menu: {},
            pageList: [],
            currentPage: null
        }
    }

    componentDidMount() {
        Ajax.getDataList().then((res) => {
            this.setState({
                menu: res.data
            })
        })
    }

    componentWillMount() {
        let { children, location } = this.props;
        this._handleAddPage(location.pathname, children);
    }

    componentWillReceiveProps(nextProps) {
        let { children, location } = nextProps;
        this._handleAddPage(location.pathname, children);
    }

    _handleAddPage(pathname, page) {
        let { pageList } = this.state;
        if (!page)
            return;

        if (this._isHaveNotPathName(pageList, pathname)) {
            pageList.push(page);
            this.setState({
                pageList: pageList,
                currentPage: pathname
            })
        }

    }

    _isHaveNotPathName(list, name) {
        let isTrue = true;
        list && list.map(item => {
            if (item.props.location.pathname === name) {
                isTrue = false;
            }
        });
        return isTrue;
    }

    _handleChangeTabs(data) {
        // console.log('changeTab', data)
        this.setState({
            currentPage: data.router ? '/' + data.router : data.pathname
        })
    }

    _handleOnClose(pathname, index) {
        let { pageList } = this.state;
        let { router } = this.props;
        let length = pageList.length;
        let newTab = {};
        let newPageList = pageList.filter(item => {
            let originName = item.props.location.pathname
            return originName != pathname;
        });

        if (length === 1) {
            newTab = { pathname: '/' }
        } else if (index === length - 1) {
            newTab = {
                pathname: pageList[index - 1].props.location.pathname
            }
        } else {
            newTab = {
                pathname: pageList[index + 1].props.location.pathname
            }
        }
        router.replace(newTab);
        this.setState({
            pageList: newPageList,
            currentPage: newTab.pathname
        })
    }

    render() {
        let { menu, pageList, currentPage } = this.state;
        return (
            <div className="sd-main-layout">
                <div className="layout-sider">
                    <Logo title="Red System" />
                    <Slider menu={menu} onTabChange={this._handleChangeTabs} currentPage={currentPage} />
                </div>
                <div className="layout-box">
                    <Header />
                    <div className="layout-content">
                        <PageTab
                            pageList={pageList}
                            currentPage={currentPage}
                            onTabChange={this._handleChangeTabs}
                            onTabClose={this._handleOnClose} />
                        {pageList.map((item) => {
                            let { pathname } = item.props.location;
                            return (
                                <div
                                    id={pathname}
                                    key={pathname}
                                    className="layout-page-list"
                                    style={{ display: pathname === currentPage ? 'block' : 'none' }} >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Main);