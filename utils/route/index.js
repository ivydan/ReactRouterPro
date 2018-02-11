import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
import Utils from 'utils/common/utils';
import LazyBundle from './lazyBundle';
//Main
import main from 'components/main';
import DefaultIndex from 'src/defaultIndex/default.bundle';
import About from 'src/about/about.bundle';
import Introduce from 'src/introduce/introduce.bundle';
import Emitte from 'src/emitte/emitte.bundle';
import ErrorPage from 'src/error/error.bundle';
import Test from 'src/test/test.bundle';
import Login from 'src/login/login.bundle';

const lazyLoadComponent = (comp) => (props) => (
    <LazyBundle load={comp}>
        {(Container) => <Container {...props} />}
    </LazyBundle>
)

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/login" component={lazyLoadComponent(Login)} />
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
    console.log('Enter', nextState, replace, next);
    console.log(Utils.isCheckoutUser())
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