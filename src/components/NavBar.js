import React, {Component} from 'react'
import SideNav from './SideNav.js'
import { Router, Route, Link, browserHistory } from 'react-router'

class NavBar extends Component{
	constructor(props) {
		super(props)
	}
	render() {

		return (
			<div className="NavBar">
				<SideNav />
				<Link to={"/"}>
					<span className="title">React Test</span>
				</Link>
			</div>
		)
	}
}
module.exports = NavBar;
