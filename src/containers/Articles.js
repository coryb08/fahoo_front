import React from "react";
// import uuid from "uuid";
import { store } from "../store.js";
import * as actions from "../actions";
import { connect } from "react-redux";
import FourSubArticles from "../components/FourSubArticles";
import MainArticle from "../components/MainArticle";

const Articles = props => {
  let mainArticle = props.articlesArray[0];

  let fourArticles = props.articlesArray.slice(1, 5).map((article, i) => (
    <div className="filteredSearchCard" key={i}>
      {article.title}
    </div>
  ));
  return (
    <div className="defaultArticlesDiv">
      <p>ooooook</p>
      <FourSubArticles articles={fourArticles} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    articlesArray: state.articles,
    searchInput: state.searchSubmit.payload
  };
}

export default connect(mapStateToProps, {})(Articles);
