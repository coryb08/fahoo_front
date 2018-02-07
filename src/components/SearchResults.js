import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

const SearchResults = props => {
  let articles = props.articlesArray
    // .filter(
    //   article =>
    //     article.title.toLowerCase().includes(props.searchInput.toLowerCase()) ||
    //     (article.description !== null &&
    //       article.description
    //         .toLowerCase()
    //         .includes(props.searchInput.toLowerCase()))
    // )
    .map((filteredArticle, i) => (
      <div className="filteredSearchCard" key={i}>
        <img className="filteredSearchImage" src={filteredArticle.urlToImage} />
        <h3>{filteredArticle.title}</h3>
      </div>
    ));
  return <div className="filteredSearchDiv">{articles}</div>;
};

function mapStateToProps(state) {
  console.log("state ", state);
  return {
    articlesArray: state.articles.payload
    // searchInput: state.articles.searchTerm
  };
}

export default connect(mapStateToProps, actions)(SearchResults);
