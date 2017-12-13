/**
 * @Slider
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './index.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    _handleChangeTab(id) {
        this.setState({
            activeTab: this.state.activeTab == id ? 0 : id
        });
    }

    _handleInitSlider() {
        let { list = [] } = this.props.menu;
        return <ul className="slider-menu-list">
            {list.map((item, index) => {
                return (
                    <li key={`Menu${item.id}`} className={`menu-title${this.state.activeTab === item.id ? ' active' : ''}`} onClick={this._handleChangeTab.bind(this, item.id)}>
                        <div className="name">{item.name}</div>
                        <ul>
                            {item.children && item.children.map((child) => {
                                return (
                                    <li className="menu-list">
                                        <Link to={child.router}>{child.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                );
            })}
        </ul>
    }

    render() {
        return <div className="sd-slider">
            {this._handleInitSlider()}
        </div>
    }
}