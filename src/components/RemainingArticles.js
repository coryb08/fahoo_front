import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

// import SearchForm from "../containers/SearchForm";
// import Logo from "../../images/CNN-logo.jpg";

const RemainingArticles = props => {
  console.log("remain ", props);
  return (
    <div>
      <div className="mainArticleDiv">
        <a href={props.articlesArray.url} target="_blank">
          <img
            className="mainArticleImage"
            src={props.articlesArray.urlToImage}
          />
          <h1>{props.articlesArray.title}</h1>
        </a>
      </div>
    </div>
  );
};
// function mapStateToProps(state) {
//   return {
//     articlesArray: state.articles.payload.slice(5, -1)
//   };
// }
// export default connect(mapStateToProps, {})(RemainingArticles);
export default RemainingArticles;
