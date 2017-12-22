import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PageTab extends Component {
    constructor(props) {
        super(props);

    }

    _handleClickTab(data, e){
        e.stopPropagation();
        this.props.onTabChange(data);
    }

    _handleClickClose(pathname, index, e){
        e.stopPropagation();
        this.props.onTabClose(pathname, index);
    }

    render() {
        let { pageList, currentPage } = this.props;
        return (
            <div className="sd-page-tab">
                {pageList.map((item, index) => {
                    let { state, pathname } = item.props.location;
                    let name = pathname.replace(/\//,'');
                    return (
                        <span className={`tab${pathname === currentPage ? ' active' : ''}`} onClick={this._handleClickTab.bind(this, item.props.location)}>
                            <Link to={{
                                pathname: pathname,
                                state: {
                                    name: state && state.name
                                }
                            }}>{name ? name : 'Index'}</Link>
                            <span className="tab-close" onClick={this._handleClickClose.bind(this,pathname, index)}>×</span>
                        </span>
                    )
                })}
            </div>
        );
    }

}