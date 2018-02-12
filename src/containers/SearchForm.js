import React, { Component } from "react"
import uuid from "uuid"
import { connect } from "react-redux"
import * as actions from "../actions"

export class SearchForm extends Component {
  handleOnSubmit = event => {
    event.preventDefault()
    this.props.fetchArticles(event.target[0].value)
  }

  render() {
    return (
      <div className="searchFormDiv">
        <form onSubmit={this.handleOnSubmit}>
          <input className="searchInput" type="text" placeholder="find news" />

          <button className="searchSubmit" type="submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, actions)(SearchForm)
