import React from "react"
import * as actions from "../actions"
import { connect } from "react-redux"

// import SearchForm from "../containers/SearchForm";
// import Logo from "../../images/CNN-logo.jpg";

const RemainingArticles = props => {
  const handleLike = event => {
    let user1
    console.log("lakjsdfa ", props)
    let article1 = props.articlesArray[event.target.id]

    if (props.state.users.status !== undefined) {
      user1 = props.state.users
      props.fetchUser({
        username: user1.username,
        password: user1.password
      })
      return props.handleLike(article1, user1.id)
    } else {
      alert("Please log in or sign up to add article to favorites")
    }
  }
  let artMap = props.articlesArray.map((art, i) => {
    return (
      <div className="RAcard">
        <a href={art.url} target="_blank">
          <div
            className="RAimage"
            style={{ backgroundImage: `url(${art.urlToImage})` }}
          />
          <h4 className="RAtitle">{art.title}</h4>
          <p className="RAdescription">{art.description}</p>
        </a>
        <div id={i} onClick={handleLike} className="RAImageLike" />
      </div>
    )
  })
  return <div className="RAdiv">{artMap}</div>
}
function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps, actions)(RemainingArticles)
// export default RemainingArticles
// <div id={i} onClick={handleLike} className="RAImageLike" />
