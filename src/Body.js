import React from "react"
import Articles from "./containers/Articles"
import Header from "./components/Header"
import SignInUp from "./containers/SignInUp"
import * as actions from "./actions"
import { connect } from "react-redux"
import SearchResults from "./components/SearchResults"
import { bindActionCreators } from "redux"
import Favorites from "./containers/Favorites"

// function componentDidMount() {
//   console.log("app mounted");
//   this.props.actions.fetchArticles();
// }
//
// componentDidMount();

const Body = props => {
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
