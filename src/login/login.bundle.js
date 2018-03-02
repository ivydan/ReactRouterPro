/*
 * @Author: Maggie 
 * @Date: 2018-01-08 11:25:13 
 * @Last Modified by: Maggie
 * @Last Modified time: 2018-01-09 14:48:03
 * @Content: Login Page
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree from './utils/tree';
import Page from './view/page';

import './index.less';

class Index extends Component{
    render(){
        return <Page />
    }
}

const RootIndex = root(tree, Index);

export default RootIndex;