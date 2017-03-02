import React from 'react';
import {Router, Route, browserHistory, redirect} from 'react-router'
import HomePage from './routes/home'
import UserPage from './routes/userPage'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={HomePage} />
				<Route path="/user/:id" component={UserPage}/>
			</Router>
		)
	}
}


module.exports = App
