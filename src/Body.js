import React from "react"
import SearchForm from "./containers/SearchForm"
import Articles from "./containers/Articles"
import MainArticle from "./components/MainArticle"
import Header from "./components/Header"
import SignInUp from "./containers/SignInUp"
import Navbar from "./components/Navbar"
import * as actions from "./actions"
import { connect } from "react-redux"
import SearchResults from "./components/SearchResults"
import { bindActionCreators } from "redux"
import RemainingArticles from "./components/RemainingArticles"
import Favorites from "./containers/Favorites"
import Warning from "./containers/Warning"
// function componentDidMount() {
//   console.log("app mounted");
//   this.props.actions.fetchArticles();
// }
//
// componentDidMount();

const Body = props => {
  console.log("props in body ", props.state.offClick.warningStatus)
  if (props.state.articles.searchTerm !== "") {
    return (
      <div className="container">
        {props.state.offClick.offClick ? <SignInUp /> : <div />}
        <Header />
        {props.state.favorites.status ? <Favorites /> : <div />}
        <SearchResults />
      </div>
    )
  } else {
    return (
      <div>
        <div className="container">
          {props.state.favorites.status ? <Favorites /> : <div />}
          {props.state.offClick.warningStatus ? <Warning /> : <div />}
          {props.state.offClick.offClick ? <SignInUp /> : <div />}
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
