/**
 * @Header
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

export default class Share extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title } = this.props;
        return <div className="sd-share">
            <div className="target">
                <i className="ball"></i>
                <i className="ball"></i>
            </div>
            <svg className="ball-svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </div>
    }
}