import React, { Component } from 'react';
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
        <Route path="/" component={Main} onEnter={_handleEnter} onChange={_handleOnChange}>
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

function _handleEnter(nextState, replace, next) {
    // console.log('Enter', nextState, replace, next);
    // console.log(Utils.isCheckoutUser())
    if(!Utils.isCheckoutUser()){
        replace({
            pathname: '/login'
        })
    }
    next();
    return false;
}
function _handleOnChange(params) {
    // console.log('onChange');
}

export default RouteConfig;