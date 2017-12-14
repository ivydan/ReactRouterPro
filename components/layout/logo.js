/**
 * @Header
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title } = this.props;
        return <div className="sd-logo">
            <div className="title">
                <span className="icon"></span>
                {title}
            </div>
        </div>
    }
}