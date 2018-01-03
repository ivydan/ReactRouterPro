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

    componentWillReceiveProps(nextProps){
        let { currentPage, menu } = nextProps;
        if(currentPage !== '/'){
            menu.list && menu.list.map((item, i) => {
                item.children.map((v, j) => {
                    if(v.router === currentPage.replace(/\//, "")){
                        this.setState({
                            activeTab: item.id
                        })
                    }
                })
            })
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
        let { currentPage, menu } = this.props;
        let { list = [] } = menu;
        return <ul className="slider-menu-list">
            {list.map((item, index) => {
                return (
                    <li 
                        key={`Menu${item.id}`} 
                        className={`menu-title${this.state.activeTab === item.id ? ' active' : ''}`} 
                        onClick={this._handleChangeTab.bind(this, item)}>

                        <div className="name">{item.name}</div>
                        <ul>
                            {item.children && item.children.map((child, i) => {
                                return (
                                    <li 
                                        key={"MenuSub"+item.name+i}
                                        className={`menu-list${currentPage === '/'+child.router ? ' active': ''}`} 
                                        onClick={this._handleClickTab.bind(this, child)}>
                                        {/* <Link to={{pathname: '/'+child.router}}>{child.name}</Link> */}
                                        <span>{child.name}</span>
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