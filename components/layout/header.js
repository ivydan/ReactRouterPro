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
        return <div className="sd-header">
            <span className="user">Boss</span>
        </div>
    }
}