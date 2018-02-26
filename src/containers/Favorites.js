import React from "react"
// import uuid from "uuid";
import * as actions from "../actions"
import { connect } from "react-redux"

const Favorites = props => {
  const handleOOffClick = () => {
    props.handleOffClick(false)
  }

  let artMap = props.state.favorites.articles.map(art => {
    return (
      <div className="FavCard">
        <a href={art.url} target="_blank">
          <div
            className="FavImage"
            style={{ backgroundImage: `url(${art.urlToImage})` }}
          />
          <h4 className="FavTitle">{art.title}</h4>
        </a>
      </div>
    )
  })

  return (
    <div>
      <div id="darkness" onClick={handleOOffClick} className="favoritesDiv" />
      <div className="outerFavoritesDiv">
        <div id="whiteDiv" className="favoritesContent">
          {artMap}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(Favorites)
