import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class SignInUp extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  handleInSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    if (this.state.email === '' || this.state.password === '') {
      return
    } else {
      return this.props.signIn(this.state)
      // email: event.target[0].value,
      // password: event.target[1].value
      // })
    }
  }

  handleUpSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    if (
      event.target[0].value === '' ||
      event.target[1].value === '' ||
      event.target[2].value === ''
    ) {
      return
    } else {
      return this.props.createUser({
        email: event.target[0].value,
        password: event.target[1].value,
        passwordMatch: event.target[2].value
      })
    }
  }

  handleOffClick = event => {
    event.preventDefault()
    if (event.target.id === 'darkness') {
      return this.props.handleOffClick(false)
    } else {
      return
    }
  }

  updateForm = event => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      [event.target.name]: event.target.value
    })
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
            <form className="signInForm">
              <label className="signInLabel">Sign In</label>
              <input
                onChange={this.updateForm}
                name="email"
                placeholder="email"
                className="signInemail"
                type="text"
              />
              <input
                onChange={this.updateForm}
                name="password"
                placeholder="password"
                className="signInPassword"
                type="password"
              />
              <button
                value="Sign In"
                onClick={this.handleInSubmit}
                className="signInSubmit"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <form onSubmit={this.handleUpSubmit} className="signUpForm">
              <label className="signUpLabel">Sign Up</label>
              <input
                name="email"
                placeholder="email"
                className="signUpemail"
                type="text"
              />
              <input
                name="password"
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
