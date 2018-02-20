import React from "react"
import * as actions from "../actions"
import { connect } from "react-redux"
import "../App.css"

// import SearchForm from "../containers/SearchForm";
// import Logo from "../../images/CNN-logo.jpg";

const FourSubArticles = props => {
  // let classing
  // const classings = () => {
  //   if (props.state.users.status !== undefined) {
  //     classing = "fourSubImageLike"
  //     return classing
  //   } else {
  //     classing = "fourImageNoUser"
  //     return classing
  //   }
  // }

  const handleLike = event => {
    let user1
    let article1 = props.articles[event.target.id]
    if (props.state.users.status !== undefined) {
      user1 = props.state.users.id
      return props.handleLike(article1, user1)
    } else {
      alert("Please log in or sign up to add article to favorites")
    }
  }

  const fourArticles = props.articles.map((arti, i) => (
    <div className={`fourArticlesCard${i}`} key={arti.url}>
      <div id={i} onClick={handleLike} className="fourSubImageLike" />
      <a href={arti.url} target="_blank">
        <div
          style={{ backgroundImage: `url(${arti.urlToImage})` }}
          className="fourSubImage"
        />

        <h4 className="fourSubTitle">{arti.title}</h4>
      </a>
    </div>
  ))
  return <div className="fourSubArticlesDiv">{fourArticles}</div>
}
//
function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(FourSubArticles)

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
