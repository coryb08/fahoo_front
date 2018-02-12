import React from "react"
import SearchForm from "../containers/SearchForm"
import Logo from "../../images/CNN-logo.jpg"
import * as actions from "../actions"
import { connect } from "react-redux"
import { Component } from "react"

const Header = props => {
  function handleOnSubmit() {
    props.fetchArticles("")
  }
  return (
    <div className="header">
      <div className="mainLogo">
        <div
          onClick={handleOnSubmit}
          className="imageLogo"
          style={{
            backgroundImage: `url(https://www.alienskin.com/site/wp-content/uploads/2013/09/Yahoo-reflect.png)`
          }}
        />
      </div>
      <SearchForm />
    </div>
  )
}

export default connect(null, actions)(Header)
