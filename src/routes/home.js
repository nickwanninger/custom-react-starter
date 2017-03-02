import React, {Component} from "react"
import NavBar from '../components/NavBar'
import Users from '../components/Users.js'

const http = require('axios')

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
			  <h1>{"List of Users"}</h1>
			  <Users/>
        </div>
      </div>

    )
  }
}

module.exports = Home
