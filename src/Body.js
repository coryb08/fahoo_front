import React from 'react'
import Articles from './containers/Articles'
import Header from './containers/Header'
import SignInUp from './components/SignInUp'
import * as actions from './actions'
import { connect } from 'react-redux'
import SearchResults from './components/SearchResults'
import { bindActionCreators } from 'redux'
import Favorites from './containers/Favorites'
import Footer from './containers/Footer'

const Body = props => {
  if (props.state.articles.searchTerm !== '') {
    return (
      <div className="container">
        {props.state.offClick.offClick ? <SignInUp /> : <div />}
        <Header />
        {props.state.favorites.status ? <Favorites /> : <div />}
        <SearchResults />
        <Footer />
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
          <Footer />
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
