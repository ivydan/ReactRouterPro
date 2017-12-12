import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
//Main
import main from 'components/main';

const about = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/about').default)
    }, 'about')
}

const defaultIndex = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/defaultIndex').default)
    }, 'defaultIndex')
};

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={main}>
            <IndexRoute getComponent={defaultIndex} />//首页
            <Route path="index" getComponent={defaultIndex} />
            <Route path="about" getComponent={about} />//帮助中心
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;