import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'

class Error extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: this.props.route ? this.props.route.error || "UNKNOWN ERROR" : this.props.error || "UNKNOWN ERROR"
    }
    
  }
  render() {
    return (
      <div className="errorPage">
        <h1>{this.state.error}</h1>
        <h2>Sorry!</h2>
        <Link to="/"><button>Back home</button></Link>
      </div>
    );
  }
}

export default Error;