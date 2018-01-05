import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
//Main
import main from 'components/main';
import AsyncComponent from './asyncComponent';

const defaultIndex = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/defaultIndex').default)
    }, 'defaultIndex')
};

// const defaultIndex = AsyncComponent(() => import("src/defaultIndex"));
const about = AsyncComponent(() => 
  import(/* webpackChunkName: "about" */ "src/about")
)

// const about = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('src/about').default)
//     }, 'about')
// }

const introduce = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/introduce').default)
    }, 'introduce')
}

const emitte = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/emitte').default)
    }, 'emitte');
}

const error = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/error').default)
    }, 'error');
}

const test = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('src/test').default)
    }, 'test');
}

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={main} onEnter={_handleEnter} onChange={_handleOnChange}>
            <IndexRoute getComponent={defaultIndex} />
            <Route path="index" getComponent={defaultIndex} />
            <Route path="about" getComponent={about} />
            <Route path="introduce" getComponent={introduce} />
            <Route path="emitte" getComponent={emitte} />
            <Route path="error" getComponent={error} />
            <Route path="test" getComponent={test} />
            <Redirect from='*' to='/error' />
        </Route>
    </Router>
);

function _handleEnter(nextState, replace, next) {
    // console.log('Enter', nextState, replace, next);
    next();
}
function _handleOnChange(params) {
    // console.log('onChange');
}

export default RouteConfig;