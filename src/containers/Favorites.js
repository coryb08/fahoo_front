import React from "react"
// import uuid from "uuid";
import { store } from "../store.js"
import * as actions from "../actions"
import { connect } from "react-redux"
import FourSubArticles from "../components/FourSubArticles"
import MainArticle from "../components/MainArticle"
import RemainingArticles from "../components/RemainingArticles"
import WeatherWidget from "../components/WeatherWidget"

const Favorites = props => {
  console.log("inside favs ", props)
  const handleOOffClick = () => {
    props.handleOffClick(false)
  }

  let artMap = props.state.users.articles.map(art => {
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
  console.log("initial", state.articles.payload)
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(Favorites)
