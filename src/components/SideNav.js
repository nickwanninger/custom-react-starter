import React, {Component} from 'react'
import Users from './Users'

class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sideNavOpen: false
    }
  }


  toggleSidenav() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }


  render() {
    return (
      <div>
        <i className="menuButton fa fa-bars" onClick={this.toggleSidenav.bind(this)}></i>
        <div className={(this.state.sideNavOpen
          ? 'sidenav active'
          : 'sidenav')}>
			 <i className="fa fa-close" onClick={this.toggleSidenav.bind(this)}></i>
			 <Users/>
        </div>
      </div>
    )
  }
}
module.exports = SideNav;
