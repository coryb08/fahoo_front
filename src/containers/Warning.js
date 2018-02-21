import React, { Component } from "react"
import uuid from "uuid"
import { connect } from "react-redux"
import * as actions from "../actions"

const Warning = props => {
  console.log("inside favs ", props)
  const handleOffClick = () => {
    props.handleWarning(false)
  }

  return (
    <div>
      <div id="darkness" onClick={handleOffClick} className="warningDiv" />
      <div className="outerWarningDiv">
        <div id="whiteDiv" className="warningContent">
          <h1>
            Hi{" "}
            <img
              className="warningWave"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/2000px-Emoji_u1f44b.svg.png"
            />{" "}
            !
          </h1>

          <h4 style={{ fontWeight: `600` }}>
            This site isn't secure yet. Don't sign up with any sensitive
            information.
          </h4>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(Warning)
