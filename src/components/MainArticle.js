import React from "react"
import * as actions from "../actions"
import { connect } from "react-redux"

// import SearchForm from "../containers/SearchForm";
// import Logo from "../../images/CNN-logo.jpg";

const MainArticle = props => {
  return (
    <div className="mainArticleDiv">
      <a target="_blank" href={props.article.url}>
        <img className="mainArticleImage" src={props.article.urlToImage} />
        <div className="mainTitleGrid">
          <h1 className="mainArticleTitle">{props.article.title}</h1>
        </div>
        <p className="mainArticleDescription">{props.article.description}</p>
        <div className="mask">
          <img
            className="mainArticleImageBlur"
            src={props.article.urlToImage}
          />
        </div>
      </a>
    </div>
  )
}
// function mapStateToProps(state) {
//   return {
//     articlesArray: state.articles,
//     searchInput: state.searchSubmit.payload
//   };
// }
// export default connect(mapStateToProps, {})(MainArticle);
export default MainArticle
