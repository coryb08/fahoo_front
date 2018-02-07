import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

// import SearchForm from "../containers/SearchForm";
// import Logo from "../../images/CNN-logo.jpg";

const MainArticle = props => {
  return (
    <div className="mainArticleDiv">
      <a href={props.article.url} target="_blank">
        <img className="mainArticleImage" src={props.article.urlToImage} />
        <h1>{props.article.title}</h1>
      </a>
    </div>
  );
};
// function mapStateToProps(state) {
//   return {
//     articlesArray: state.articles,
//     searchInput: state.searchSubmit.payload
//   };
// }
// export default connect(mapStateToProps, {})(MainArticle);
export default MainArticle;
