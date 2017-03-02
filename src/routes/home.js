import React, {Component} from "react"

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main">
        <h1>Hello World!</h1>
        <p>And they said React was a pain to setup!</p>
      </div>
    )
  }
}

module.exports = Home
