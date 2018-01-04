import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
import LazyBundle from './lazyBundle';
//Main
import main from 'components/main';
import DefaultIndex from 'src/defaultIndex/default.bundle.js';
import About from 'src/about/about.bundle.js';
import Introduce from 'src/introduce/introduce.bundle.js';
import Emitte from 'src/emitte/emitte.bundle.js';
import ErrorPage from 'src/error/error.bundle.js';
import Test from 'src/test/test.bundle.js';

const lazyLoadComponent = (comp) => (props) => (
    <LazyBundle load={comp}>
        {(Container) => <Container {...props} />}
    </LazyBundle>
)

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={main} onEnter={_handleEnter} onChange={_handleOnChange}>
            <IndexRoute component={lazyLoadComponent(DefaultIndex)} />
            <Route path="index" component={lazyLoadComponent(DefaultIndex)} />
            <Route path="about" component={lazyLoadComponent(About)} />
            <Route path="introduce" component={lazyLoadComponent(Introduce)} />
            <Route path="emitte" component={lazyLoadComponent(Emitte)} />
            <Route path="error" component={lazyLoadComponent(ErrorPage)} />
            <Route path="test" component={lazyLoadComponent(Test)} />
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