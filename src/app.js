/**
 * @Page
 * 
 */
import ReactDOM from 'react-dom';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import routes from 'routes';
import createHistory from 'history/createHashHistory'

const history = createHistory();

let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(
	<Router history={history}>
		{routes}
	</Router>
, app);