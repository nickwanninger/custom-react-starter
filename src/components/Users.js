import React, {Component} from 'react'
import {Router, Route, Link, browserHistory} from 'react-router'
import http from 'axios'
class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      search: ""
    }

    this.openUser = this.openUser.bind(this)
    this.searchChanged = this.searchChanged.bind(this)
    this.getUserRows = this.getUserRows.bind(this)
  }

  componentDidMount() {
    http.get("/api/users").then((e) => {
      this.setState({users: e.data})
    })
  }

  openUser(id) {
    window.location.href = `/user/${id}`
  }

  searchChanged(event) {
    this.setState({search: event.target.value})
  }

  getUserRows() {
    const re = new RegExp(this.state.search, 'gi')
	 let checkMatch = (u) => {
		 return u.username.match(re) || u.email.match(re) || u.description.match(re)
	 }
    let filtered = this.state.users.filter((u) => checkMatch(u));
    let rows = filtered.map((user) => {
      return (
        <div className="user-row" key={user.id}>
			 <span className="username">{user.username}</span>
          <button className="link" onClick={() => this.openUser(user.id)}>Open</button>
        </div>
      )
    })
	 if (filtered.length > 0) {
	 	return rows
	 }
	 else {
		 return (<span>No users matching {this.state.search}</span>)
	 }
  }

  render() {
    return (
      <div className="user-wrapper">
        <input type="text" value={this.state.search} placeholder={"Search"} onChange={this.searchChanged}/>
		  <hr/>
		  <div>{this.getUserRows()}</div>
      </div>
    )
  }
}
module.exports = Users;
