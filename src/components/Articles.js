import React from "react";
// import uuid from "uuid";
import { store } from "../store.js";
import * as actions from "../actions";
import { connect } from "react-redux";

const Articles = props => {
  console.log(props.articles());
  return <ul>{props.articles.map(article => <li>article.title</li>)}</ul>
};


//
// function mapDispatchToProps(state) {
//   return {articles: state.articles}
// }


export default connect(null, actions)(Articles);
