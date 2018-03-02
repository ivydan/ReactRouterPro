import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
import Utils from 'utils/common/utils';
import LazyBundle from './lazyBundle';
import RouterListInPage from './functionPage';
//Main
import Main from 'components/main';
import DefaultIndex from 'src/defaultIndex/default.bundle';
import Login from 'src/login/login.bundle';

const lazyLoadComponent = (comp) => (props) => (
    <LazyBundle load={comp}>
        {(Container) => <Container {...props} />}
    </LazyBundle>
)

const ContextRouterList = require.context('../../src', true, /\.bundle\.(js|jsx)$/);

console.log('ContextRouterList:', ContextRouterList);
// debugger
ContextRouterList.keys().forEach((filename) => {
    console.log(filename, ContextRouterList(filename));
    
})

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/login" component={lazyLoadComponent(Login)} />
        <Route path="/" component={main} onEnter={_handleEnter} onChange={_handleOnChange}>
            {/* 主页面 */}
            <IndexRoute component={lazyLoadComponent(DefaultIndex)} />
            <Route path="index" component={lazyLoadComponent(DefaultIndex)} />
            {/* 功能页面 */}
            {RouterListInPage.map((route, i) => <RouteWithSubRoutes key={"ROUTER" + i} {...route} />)}
            {/* 错误重定向 */}
            <Redirect from='*' to='/error' />
        </Route>
    </Router>
);

// const rootRoute = [{
//     path: '/login',
//     component: lazyLoadComponent(Login)
// },{
//     path: '/',
//     component: Main,
//     indexRoute: {component: lazyLoadComponent(DefaultIndex)},
//     onEnter: _handleEnter,
//     onChange: _handleOnChange,
//     childRoutes: [{
//         path: '/about',
//         component: lazyLoadComponent(DefaultIndex)
//     }],
//     childRoutes: (r => {
//         console.log('r:',r)
//         return r.keys().map(key => {
//             console.log(r(key).default);
//             //功能文件中配置path和component返回
//             return r(key).default;
//         });
//     })(require.context('../../src', true, /\.bundle\.(js|jsx)$/))
// }];
//https://www.jianshu.com/p/386916c73dad

function _handleEnter(nextState, replace, next) {
    console.log('Enter', nextState, replace, next);
    console.log(Utils.isCheckoutUser())
    // if(!Utils.isCheckoutUser()){
    //     replace({
    //         pathname: '/login'
    //     })
    // }
    next();
    return false;
}
function _handleOnChange(params) {
    // console.log('onChange');
}

export default RouteConfig;