import React from 'react'
import { Route } from 'react-router-dom';
import ReactChildrenMap from './ReactChildrenMap'
import Page from 'components/page/app';
import About from '../src/about';


// const PageOnEnter = (nextState, replace, next) => {
// 	console.log("PageONEnter");
	
	// let { pathname} = nextState.location;
	// //判断是否需要登陆。
	// if(!OrLogin()){
	// 	let redirectUrl = pathname + nextState.location.search;
	// 	replace({
	// 		pathname: '/login',
	// 		search: '?redirectUrl=' + encodeURIComponent(redirectUrl),
	// 		state: {
	// 			redirectUrl: redirectUrl
	// 		}
	// 	});
	// 	next();
	// 	return;
	// }

// 	next();
// 	return;
// }

// const PageOnChange = (prevState, nextState, replace, next) => {
// 	console.log("PageChange")

	// let { pathname} = nextState.location;
	// //判断是否需要登陆。
	// if(!OrLogin()){
	// 	let redirectUrl = pathname + nextState.location.search;
	// 	replace({
	// 		pathname: '/login',
	// 		search: '?redirectUrl=' + encodeURIComponent(redirectUrl),
	// 		state: {
	// 			redirectUrl: redirectUrl
	// 		}
	// 	});
	// 	next();
	// 	return;
	// }
	
// 	next();
// 	return;
// }

// const OrLogin = () =>{
// 	return !!document.cookie && document.cookie !== 'null';
// }

export default (
	<Route render={({ location }) => {
        return(
            <ReactChildrenMap key={location.pathname}>
                <Route location={location} exact path="/" component={Page} />
                <Route location={location} path="/about" component={About} />
            </ReactChildrenMap>
        )
    }}/>
)

// export default (
// 	<Route>
// 		{/*<Route path="/login" component={Login} />*/}
// 		<Route path="/" component={Page} onEnter={PageOnEnter} onChange={PageOnChange} >
// 			<IndexRoute component={IndexHome} />
// 			<Route path="about" component={About} />
// 			<Route path="error" component={Error} />
// 			<Redirect from="*" to="error" />
// 		</Route>
// 	</Route>
// )

