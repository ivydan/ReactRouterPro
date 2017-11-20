/**
 * @Main
 * 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import routes from '../../util/routes';
import { createHistory } from 'history';

let basename = '';
const history = useRouterHistory(createHistory)({ 
	basename 
});

ReactDOM.render(
	<Router history={history} routes={routes}></Router>
, document.getElementById("container"));