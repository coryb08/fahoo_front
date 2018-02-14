import React, { Component } from "react"
import uuid from "uuid"
import { connect } from "react-redux"
import * as actions from "../actions"

export class SignInUp extends Component {
  handleOnSubmit = event => {
    event.preventDefault()
  }

  handleOffClick = event => {
    event.preventDefault()
    if (event.target.id === "darkness") {
      this.props.handleOffClick(false)
    } else {
      console.log("handleoffclick !== darkness ", event.target.id)
    }
  }

  render() {
    return (
      <div id="darkness" onClick={this.handleOffClick} className="signInUpDiv">
        <div id="whiteDiv" className="signInUpContent">
          <form className="signInForm">
            <label className="signInLabel">Sign In</label>
            <input
              placeholder="username"
              className="signInUsername"
              type="text"
            />
            <input
              placeholder="password"
              className="signInPassword"
              type="password"
            />
          </form>
          <form className="signUpForm">
            <label className="signUpLabel">Sign Up</label>
            <input
              placeholder="username"
              className="signUpUsername"
              type="text"
            />
            <input
              placeholder="password"
              className="signUpPassword1"
              type="password"
            />
            <input
              placeholder="confirm password"
              className="signUpPassword2"
              type="password"
            />
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, actions)(SignInUp)
