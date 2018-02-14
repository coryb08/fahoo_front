import React from "react"
// import uuid from "uuid";
import { store } from "../store.js"
import * as actions from "../actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const UserNav = props => {
  console.log("nav ", props)

  const handleOffClick = event => {
    return props.handleOffClick(true)
  }
  return (
    <div className="dropdown">
      <button onClick={handleOffClick} className="dropbtn">
        {props.user.username ? props.user.username : "Log in / Sign up"}
      </button>
      <div className="dropdown-content">
        <a href="#">Profile</a>
        <a href="#">Bookmarks</a>
        <a href="#">Log Out</a>
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
