import React from "react"
import SearchForm from "../containers/SearchForm"
import Logo from "../../images/CNN-logo.jpg"
import * as actions from "../actions"
import { connect } from "react-redux"
import { Component } from "react"
import UserNav from "../containers/UserNav"

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
            backgroundImage: `url(https://farm5.staticflickr.com/4764/39485392885_10709ac6c1.jpg)`
          }}
        />
      </div>
      <SearchForm />
      <UserNav />
    </div>
  )
}

export default connect(null, actions)(Header)
