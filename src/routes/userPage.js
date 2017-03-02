import React, {Component} from "react"
import NavBar from '../components/NavBar'
const http = require('axios')

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    let url = "/api/user/" + this.props.params.id;
    http.get(url).then((response) => {
      console.log(response);
      this.setState({user: response.data})
    })
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
			  <img src={this.state.user.image} alt=""/>
			  <br/>
			  {this.state.user.email}
			  <br/>
			  {this.state.user.first_name}
			  <br/>
			  description: {this.state.user.description}
        </div>
      </div>

    )
  }
}

module.exports = UserPage
