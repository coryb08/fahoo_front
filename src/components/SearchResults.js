import React from "react"
import * as actions from "../actions"
import { connect } from "react-redux"
import { Component } from "react"

const SearchResults = props => {
  const articles = props.articlesArray.map(filteredArticle => (
    <div className="filteredSearchCard" key={filteredArticle.url}>
      <a href={filteredArticle.url} target="_blank">
        <div
          className="filteredSearchImage"
          style={{ backgroundImage: `url(${filteredArticle.urlToImage})` }}
        />
        <h3 className="filteredSearchTitle">{filteredArticle.title}</h3>
        <p className="filteredSearchDescription">
          {filteredArticle.description}
        </p>
      </a>
    </div>
  ))
  console.log(articles, props.articlesArray.length, props.articlesArray[2])

  return <div className="filteredSearchDiv">{articles}</div>
}

function mapStateToProps(state) {
  return {
    articlesArray: state.articles.payload,
    searchTerm: state.articles.searchTerm
  }
}

export default connect(mapStateToProps, actions)(SearchResults)
