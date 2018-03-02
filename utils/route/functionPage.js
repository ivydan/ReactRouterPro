import React, { Component } from 'react';
import LazyBundle from './lazyBundle';

import About from 'src/about/about.bundle';
import Introduce from 'src/introduce/introduce.bundle';
import Emitte from 'src/emitte/emitte.bundle';
import ErrorPage from 'src/error/error.bundle';
import Test from 'src/test/test.bundle';

const lazyLoadComponent = (comp) => (props) => (
    <LazyBundle load={comp}>
        {(Container) => <Container {...props} />}
    </LazyBundle>
)

const RouterListInPage = [{
    path: 'emitte',
    component: lazyLoadComponent(Emitte)
},{
    path: 'introduce',
    component: lazyLoadComponent(Introduce)
},{
    path: 'error',
    component: lazyLoadComponent(ErrorPage)
},{
    path: 'about',
    component: lazyLoadComponent(About)
},{
    path: 'test',
    component: lazyLoadComponent(Test)
}];

export default RouterListInPage;