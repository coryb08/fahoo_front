import React, { Component } from "react"
import SearchForm from "../containers/SearchForm"
import * as actions from "../actions"
import { connect } from "react-redux"
import UserNav from "../containers/UserNav"

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theClass: "headerStatic"
    }
  }
  handleOnSubmit = () => {
    this.props.fetchArticles("")
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ theClass: "headerStaticShadow" })
    } else {
      this.setState({ theClass: "headerStaticOrig" })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <div className={this.state.theClass}>
        <div className="header">
          <div className="mainLogo">
            <div onClick={this.handleOnSubmit} className="imageLogo" />
          </div>
          <SearchForm />
          <UserNav />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Header)
