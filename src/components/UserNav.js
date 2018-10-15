import React from "react"
// import uuid from "uuid";

import * as actions from "../actions"
import { connect } from "react-redux"

const UserNav = props => {
  const handleOffClick = event => {
    if (!props.user.users.status) {
      return props.handleOffClick(true)
    } else {
      return
    }
  }

  const handleFavorites = event => {
    if (props.user.users.status) {
      props.handleFavorites(props.user.users, true)
    } else {
      return
    }
  }

  const handleLogout = event => {
    if (!props.user.users.status) {
      return
    } else {
      return window.location.reload(true)
    }
  }

  const handleProfile = event => {
    alert("User profiles are in the works")
  }

  return (
    <div className="dropdown">
      <button onClick={handleOffClick} className="dropbtn">
        {props.user.users.status
          ? props.user.users.email
          : "Log in / Sign up"}
      </button>
      <div className="dropdown-content">
        <a onClick={handleProfile} href="#">
          Profile
        </a>
        <a onClick={handleFavorites} href="#">
          Favorites
        </a>
        <a onClick={handleLogout} href="#">
          Log Out
        </a>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps, actions)(UserNav)
