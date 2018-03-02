/*
 * @Author: Maggie 
 * @Date: 2018-01-02 11:22:47 
 * @Last Modified by: Maggie
 * @Last Modified time: 2018-01-09 14:11:00
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import tree from './utils/tree';
import Page from './view/page';

import { root } from 'baobab-react/higher-order';

class Index extends Component{


    render(){
        return <Page />
    }
}

const RootIndex = root(tree, Index);

export default RootIndex;