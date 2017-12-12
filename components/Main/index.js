import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import Logo from '../logo';
import Header from '../header';
import Slider from '../slider';
import './index.less'

class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="sd-main-layout">
                <div className="layout-sider">
                    <Logo title="Red System" />
                    <Slider />
                </div>
                <div className="layout-box">
                    <Header />
                    <div className="layout-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Main);