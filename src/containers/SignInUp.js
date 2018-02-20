import React, { Component } from "react"
import uuid from "uuid"
import { connect } from "react-redux"
import * as actions from "../actions"

export class SignInUp extends Component {
  handleInSubmit = event => {
    event.preventDefault()
    event.stopPropagation()

    if (event.target[0].value === "" || event.target[1].value === "") {
      return
    } else {
      this.props.fetchUser({
        username: event.target[0].value,
        password: event.target[1].value
      })
    }
  }

  handleUpSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    if (
      event.target[0].value === "" ||
      event.target[1].value === "" ||
      event.target[2].value === ""
    ) {
      return
    } else {
      return this.props.createUser({
        username: event.target[0].value,
        password: event.target[1].value,
        passwordMatch: event.target[2].value
      })
    }
  }

  handleOffClick = event => {
    console.log("event ", event)
    event.preventDefault()
    if (event.target.id === "darkness") {
      return this.props.handleOffClick(false)
    } else {
      return
    }
  }

  render() {
    return (
      <div>
        <div
          id="darkness"
          onClick={this.handleOffClick}
          className="signInUpDiv"
        />
        <div className="outerSignDiv">
          <div id="whiteDiv" className="signInUpContent">
            <form className="signInForm" onSubmit={this.handleInSubmit}>
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
              <button value="Sign In" className="signInSubmit" type="submit">
                Sign In
              </button>
            </form>
            <form onSubmit={this.handleUpSubmit} className="signUpForm">
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
              <button className="signUpSubmit" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, actions)(SignInUp)
