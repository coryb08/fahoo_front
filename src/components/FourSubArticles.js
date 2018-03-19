import React from "react"
import * as actions from "../actions"
import { connect } from "react-redux"
import "../App.css"

const FourSubArticles = props => {
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
      <a href={arti.url} target="_blank">
        <div
          style={{ backgroundImage: `url(${arti.urlToImage})` }}
          className="fourSubImage"
        />

        <h4 className="fourSubTitle">{arti.title}</h4>
      </a>
      <div id={i} onClick={handleLike} className={`fourSubImageLike${i}`} />
    </div>
  ))
  return <div className="fourSubArticlesDiv">{fourArticles}</div>
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(FourSubArticles)
