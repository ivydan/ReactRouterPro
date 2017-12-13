import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
//Main
import main from 'components/main';

const defaultIndex = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/defaultIndex').default)
    }, 'defaultIndex')
};

const about = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/about').default)
    }, 'about')
}

const introduce = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/introduce').default)
    }, 'introduce')
}

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={main}>
            <IndexRoute getComponent={defaultIndex} />
            <Route path="index" getComponent={defaultIndex} />
            <Route path="about" getComponent={about} />
            <Route path="introduce" getComponent={introduce} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;