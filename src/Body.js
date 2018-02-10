import React from "react"
import SearchForm from "./containers/SearchForm"
import Articles from "./containers/Articles"
import MainArticle from "./components/MainArticle"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import * as actions from "./actions"
import { connect } from "react-redux"
import SearchResults from "./components/SearchResults"
import { bindActionCreators } from "redux"
import RemainingArticles from "./components/RemainingArticles"
// function componentDidMount() {
//   console.log("app mounted");
//   this.props.actions.fetchArticles();
// }
//
// componentDidMount();

const Body = props => {
  if (props.state.articles.searchTerm !== "") {
    return (
      <div className="body_wrapper">
        <Header />
        <SearchResults />
      </div>
    )
  } else {
    return (
      <div>
        <div className="container">
          <Header />
          <Articles />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
// export default Body;
