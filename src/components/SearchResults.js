import React from "react";

const SearchResults = props => {
  return <ul>{props.articles.map(article => <li>{article.title}</li>)}</ul>;
};

export default SearchResults;
