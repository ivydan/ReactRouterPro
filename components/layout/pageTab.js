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
        // console.log(currentPage);
        return (
            <div className="sd-page-tab">
                {pageList.map((item, index) => {
                    let { state, pathname } = item.props.location;
                    let name = pathname.replace(/\//,'');
                    return (
                        <span 
                            key={"PageTab"+index}
                            className={`tab${pathname === currentPage ? ' active' : ''}`} 
                            onClick={this._handleClickTab.bind(this, item.props.location)}>
                            <Link to={{pathname: pathname}}>{name ? name : 'Index'}</Link>
                            <span className="tab-close" onClick={this._handleClickClose.bind(this,pathname, index)}>×</span>
                        </span>
                    )
                })}
            </div>
        );
    }

}