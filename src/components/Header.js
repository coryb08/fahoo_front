import React from "react"
import SearchForm from "../containers/SearchForm"
import * as actions from "../actions"
import { connect } from "react-redux"
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

        />
      </div>
      <SearchForm />
      <UserNav />
    </div>
  )
}

export default connect(null, actions)(Header)
