import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PageTab extends Component {
    constructor(props) {
        super(props);

    }

    _handleClickTab(data, e) {
        e.stopPropagation();
        this.props.onTabChange(data);
    }

    _handleClickClose(pathname, index, e) {
        e.stopPropagation();
        this.props.onTabClose(pathname, index);
    }

    render() {
        let { pageList, currentPage } = this.props;
        return (
            <div className="sd-page-tab">
                <span
                    className={`tab${currentPage === '/' ? ' active' : ''}`}
                    onClick={this._handleClickTab.bind(this, {router: ''})}>
                    <span>Index</span>
                </span>
                {pageList.map((item, index) => {
                    let { state, pathname } = item.props.location;
                    let name = pathname.replace(/\//, '');
                    return (
                        name === "" ? "" :
                        <span
                            key={"PageTab" + index}
                            className={`tab${pathname === currentPage ? ' active' : ''}`}
                            onClick={this._handleClickTab.bind(this, Object.assign({}, item.props.location, {
                                router: name
                            }))}>
                            <span>{name}</span>
                            <span className="tab-close" onClick={this._handleClickClose.bind(this, pathname, index)}>×</span>
                        </span>
                    )
                })}
            </div>
        );
    }

}