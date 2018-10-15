import React, { Component } from 'react'
import './App.css'
import * as actions from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Body from './Body'

export class App extends Component {
  componentDidMount = () => {
    this.props.actions.fetchArticles()
  }

  render() {
    return <Body />
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(App)

let person = {
  name: 'doug',
  change: function(name) {
    this.name = name
  }
}
