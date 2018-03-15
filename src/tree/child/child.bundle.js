/*
 * @Author: Maggie 
 * @Date: 2018-01-02 11:22:47 
 * @Last Modified by: Maggie
 * @Last Modified time: 2018-03-14 16:10:22
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Reducer from './utils/reducer';
import Page from './view/page';

import { root } from 'baobab-react/higher-order';

class Index extends Component{

    render(){
        return <Page />
    }
}

const RootIndex = root(Reducer.tree, Index);

export default RootIndex;