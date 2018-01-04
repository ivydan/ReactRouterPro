/**
 * @About
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.less';

export default class Test extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="sf-test">
                <p>1.	谷歌浏览器字体最小12px</p>
                <div className="common">通用字体大小</div>
                <br/>
                <div className="change">
                    <span>缩小字体</span>
                </div>

                <p>2.	检测页面元素</p>
                <div>
                {`[].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })`}
                </div>
            </div>
        )
    }
}