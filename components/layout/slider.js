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

    _handleChangeTab(item) {
        this.setState({
            activeTab: this.state.activeTab == item.id ? 0 : item.id
        });
    }

    _handleClickTab(data, e){
        e.stopPropagation();
        this.props.onTabChange(data);
    }

    _handleInitSlider() {
        let { list = [] } = this.props.menu;
        return <ul className="slider-menu-list">
            {list.map((item, index) => {
                return (
                    <li 
                        key={`Menu${item.id}`} 
                        className={`menu-title${this.state.activeTab === item.id ? ' active' : ''}`} 
                        onClick={this._handleChangeTab.bind(this, item)}>

                        <div className="name">{item.name}</div>
                        <ul>
                            {item.children && item.children.map((child) => {
                                return (
                                    <li className="menu-list" onClick={this._handleClickTab.bind(this, child)}>
                                        <Link to={{
                                            pathname: '/'+child.router,
                                            state:{
                                                name: child.name
                                            }
                                        }}>{child.name}</Link>
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