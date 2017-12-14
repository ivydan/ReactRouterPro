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

    render() {
        let { pageList } = this.props;
        console.log(pageList);
        return (
            <div className="sd-page-tab">
                {pageList.map((item, index) => {
                    let { state, pathname } = item.props.location;
                    return (
                        <span className="tab" onClick={this._handleClickTab.bind(this, item.props.location)}>
                            <Link to={{
                                pathname: pathname,
                                state: {
                                    name: state && state.name
                                }
                            }}>{state ? state.name : 'Index'}</Link>
                        </span>
                    )
                })}
            </div>
        );
    }

}