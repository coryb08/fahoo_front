import React from "react"
// import uuid from "uuid";
import { store } from "../store.js"
import * as actions from "../actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const UserNav = props => {
  return (
    <div className="dropdown">
      <button className="dropbtn">{props.user.username}</button>
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
    user: state.user.payload[0]
  }
}

export default connect(mapStateToProps, actions)(UserNav)
