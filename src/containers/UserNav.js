import React from "react"
// import uuid from "uuid";
import { store } from "../store.js"
import * as actions from "../actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const UserNav = props => {
  console.log("nav ", props.user)

  const handleOffClick = event => {
    if (!props.user.users.status) {
      return props.handleOffClick(true)
    } else {
      return
    }
  }

  const handleFavorites = event => {
    console.log("nav ", props.user)
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

  return (
    <div className="dropdown">
      <button onClick={handleOffClick} className="dropbtn">
        {props.user.users.status
          ? props.user.users.username
          : "Log in / Sign up"}
      </button>
      <div className="dropdown-content">
        <a href="#">Profile</a>
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
