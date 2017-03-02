import React from 'react';
import {Router, Route, browserHistory, redirect} from 'react-router'
import HomePage from './routes/home'
import ErrorPage from './routes/error'


class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Router history={this.props.history || browserHistory}>
				<Route path="/" component={HomePage} />
				<Route path="*" component={ErrorPage} error="404"/>
			</Router>
		)
	}
}


module.exports = App
