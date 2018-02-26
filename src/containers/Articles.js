import React from "react"
import { connect } from "react-redux"
import FourSubArticles from "../components/FourSubArticles"
import MainArticle from "../components/MainArticle"
import RemainingArticles from "../components/RemainingArticles"


const Articles = props => {
  return (
    <div className="defaultArticlesDiv">
      <MainArticle
        article={props.articlesArray[0] ? props.articlesArray[0] : []}
      />
      <FourSubArticles
        articles={props.articlesArray[1] ? props.articlesArray.slice(1, 5) : []}
      />
      <RemainingArticles
        articlesArray={
          props.articlesArray[1] ? props.articlesArray.slice(5, -1) : []
        }
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    articlesArray: state.articles.payload,
    searchInput: state.searchTerm
  }
}

export default connect(mapStateToProps, {})(Articles)
