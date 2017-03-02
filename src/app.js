import React from 'react';
import {Router, Route, browserHistory, redirect} from 'react-router'
import HomePage from './routes/home'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={HomePage} />
			</Router>
		)
	}
}


module.exports = App
