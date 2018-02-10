import React from "react"
import * as actions from "../actions"
import { connect } from "react-redux"

// import SearchForm from "../containers/SearchForm";
// import Logo from "../../images/CNN-logo.jpg";

const RemainingArticles = props => {
  console.log("remain ", props)
  let artMap = props.articlesArray.map(art => {
    return (
      <div className="RAcard">
        <a href={art.url} target="_blank">
          <img className="RAimage" src={art.urlToImage} />
          <h4 className="RAtitle">{art.title}</h4>
        </a>
      </div>
    )
  })
  return <div className="RAdiv">hello</div>
}
// function mapStateToProps(state) {
//   return {
//     articlesArray: state.articles.payload.slice(5, -1)
//   };
// }
// export default connect(mapStateToProps, {})(RemainingArticles);
export default RemainingArticles
