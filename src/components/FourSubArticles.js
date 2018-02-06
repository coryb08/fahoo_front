import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

// import SearchForm from "../containers/SearchForm";
// import Logo from "../../images/CNN-logo.jpg";

const FourSubArticles = props => {
  let fourArticles = props.articlesArray
    .filter(arti => arti.urlToImage !== null)
    .slice(1, 5)
    .map((article, i) => (
      <div key={i} className="fourSubArticleCard">
        <img src={article.urlToImage} />
        <h4>{article.title}</h4>
      </div>
    ));
  return <div className="fourSubArticlesDiv">{fourArticles}</div>;
};

function mapStateToProps(state) {
  return {
    articlesArray: state.articles,
    searchInput: state.searchSubmit.payload
  };
}

export default connect(mapStateToProps, {})(FourSubArticles);

// const FourSubArticles = props => {
//   return (
//     <div className="fourSubArticlesDiv">
//       {props.articles.map((article, i) => (
//         <div key={i} className="fourSubArticleCard">
//           <img src={article.urlToImage} />
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default FourSubArticles;
