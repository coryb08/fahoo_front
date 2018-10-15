import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'

const MainArticle = props => {
  const handleLike = event => {
    let user
    let article = props.article
    if (props.state.users.status !== undefined) {
      user = props.state.users.id
      return props.handleLike(article, user)
    } else {
      alert('Please log in or sign up to add article to favorites')
    }
  }

  return (
    <div className="mainArticleDiv">
      <div className="mainArticleImageLike" onClick={handleLike} />
      <a target="_blank" href={props.article.url}>
        <div
          className="mainArticleImage"
          style={{ backgroundImage: `url(${props.article.urlToImage})` }}
        />

        <div className="mainTitleGrid">{props.article.title}</div>
        <div className="mainDescriptionGrid">{props.article.description}</div>
        <div className="mask">
          <img
            role="presentation"
            className="mainArticleImageBlur"
            style={{ backgroundImage: `url(${props.article.urlToImage})` }}
          />
        </div>
      </a>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps, actions)(MainArticle)
// export default MainArticle
