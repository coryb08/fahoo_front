import React, { Component } from "react"
import uuid from "uuid"
import { connect } from "react-redux"
import * as actions from "../actions"

const Home = props => {
  console.log("inside favs ", props)
  const handleOffClick = () => {
    props.handleWarning(false)
  }

  return (
    <div className="home">
      <h1 className="greeting">Hello</h1>
      <br />

      <div className="message">
        My website is in the works. <br />In the mean time here's some links to
        social media.
      </div>
      <a
        target="_blank"
        href="https://www.facebook.com/corydbaker"
        className="facebook"
      />

      <a
        target="_blank"
        href="https://www.linkedin.com/in/cory-baker-5a533895/"
        className="linkedin"
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(Home)
