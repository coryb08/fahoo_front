import React from "react"
import SearchForm from "../containers/SearchForm"
import Logo from "../../images/CNN-logo.jpg"

const Header = props => (
  <div className="header">
    <div className="mainLogo">
      <img
        className="imageLogo"
        src="https://www.alienskin.com/site/wp-content/uploads/2013/09/Yahoo-reflect.png"
      />
    </div>
    <SearchForm />
  </div>
)

export default Header
