import React, { Component } from 'react';
import LazyBundle from './lazyBundle';

//按需加载包装器
const lazyLoadComponent = (comp) => (props) => (
    <LazyBundle load={comp}>
        {(Container) => <Container {...props} />}
    </LazyBundle>
)

//非功能页面
const NoNeed = ['./login/login.bundle.js']

//匹配组件入口
const RouterContext = require.context('../../src', true, /\.bundle\.(js|jsx)$/);

//遍历有效组件路径值
const RouterKeys = RouterContext.keys().filter(item => NoNeed.indexOf(item) === -1);

//动态初始化路由界面。根据bundle.js/jsx 匹配
const RouterListInPage = RouterKeys.map(item => {
    let nameArr = item.split('/');
    let name = nameArr[nameArr.length-1];
    let path = name.split('.')[0];
    return {
        path: path,
        component: lazyLoadComponent(RouterContext(item))
    };
});

export default RouterListInPage;