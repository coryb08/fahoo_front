import React from "react";
// import uuid from "uuid";
import { store } from "../store.js";
import * as actions from "../actions";
import { connect } from "react-redux";
import FourSubArticles from "../components/FourSubArticles";
import MainArticle from "../components/MainArticle";

const Articles = props => {
  // let mainArticle = nullCheck[0];
  // let fourArticles = nullCheck[(1, 5)];
  return (
    <div className="defaultArticlesDiv">
      <MainArticle
        article={props.articlesArray[0] ? props.articlesArray[0] : []}
      />
      <FourSubArticles
        articles={props.articlesArray[1] ? props.articlesArray.slice(1, 5) : []}
      />
    </div>
  );
};

function mapStateToProps(state) {
  console.log("in state ", state);
  return {
    articlesArray: state.articles,
    searchInput: state.searchSubmit.payload
  };
}

export default connect(mapStateToProps, {})(Articles);
