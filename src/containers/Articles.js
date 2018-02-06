import React from "react";
// import uuid from "uuid";
import { store } from "../store.js";
import * as actions from "../actions";
import { connect } from "react-redux";

const Articles = props => {
  console.log("props ", props);
  let articles = props.articlesArray
    .filter(
      article =>
        article.title.toLowerCase().includes(props.searchInput.toLowerCase()) ||
        (article.description !== null &&
          article.description
            .toLowerCase()
            .includes(props.searchInput.toLowerCase()))
    )
    .map((filteredArticle, i) => <li key={i}>{filteredArticle.title}</li>);
  return (
    <div>
      <ul>{articles}</ul>
    </div>
  );
  // return <div>hello</div>;
};

function mapStateToProps(state) {
  return {
    articlesArray: state.articles,
    searchInput: state.searchSubmit
  };
}

export default connect(mapStateToProps, {})(Articles);
