import React from "react"
// import uuid from "uuid";
import { store } from "../store.js"
import * as actions from "../actions"
import { connect } from "react-redux"
import FourSubArticles from "../components/FourSubArticles"
import MainArticle from "../components/MainArticle"
import RemainingArticles from "../components/RemainingArticles"
import WeatherWidget from "../components/WeatherWidget"

const Articles = props => {
  return (
    <div className="defaultArticlesDiv">
      <MainArticle
        article={props.articlesArray[0] ? props.articlesArray[0] : []}
      />
      <FourSubArticles
        articles={props.articlesArray[1] ? props.articlesArray.slice(1, 5) : []}
      />


    </div>
  )
}

function mapStateToProps(state) {
  console.log("initial", state.articles.payload)
  return {
    articlesArray: state.articles.payload,
    searchInput: state.searchTerm
  }
}

export default connect(mapStateToProps, {})(Articles)

// 
// <RemainingArticles
//   articlesArray={
//     props.articlesArray[1] ? props.articlesArray.slice(5, -1) : [2]
//   }
// />
