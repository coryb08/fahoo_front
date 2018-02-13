import fetch from "isomorphic-fetch"

let boole = false
var checkImage = require("image-check")

export function fetchUser() {
  // fetch("http://localhost:3000/users")
  // .then(res => res.json())
  // .then(json => {
  return {
    type: "USER",
    payload: [
      {
        id: 1,
        username: "coryb08",
        password: "123",
        created_at: "2018-02-12T19:11:43.713Z",
        updated_at: "2018-02-12T19:11:43.713Z"
      }
    ]
  }
  // })
}

export function fetchArticles(searchTerm = "") {
  const NewsAPI = require("newsapi")
  const newsapi = new NewsAPI("3f9e3c8d8e1646bbb2e9afa8979b0335")

  let link =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335"
  return function(dispatch) {
    if (searchTerm === "") {
      return fetch(link)
        .then(res => res.json())
        .then(responseJson => {
          let validArticles = responseJson.articles
            .filter(
              art =>
                art.urlToImage !== null &&
                art.description !== null &&
                art.description !== undefined &&
                art.urlToImage !== undefined
            )
            .map(arti => {
              return checkImage(arti.urlToImage)
                .then(data => arti)
                .catch(err => {})
            })
          Promise.all(validArticles)
            .then(articles => articles.filter(article => !!article))
            .then(filteredArticles =>
              dispatch({
                type: "ARTICLES",
                payload: filteredArticles,
                bool: boole,
                concat: searchTerm
              })
            )
        })
    } else {
      return newsapi.v2
        .everything({
          q: searchTerm,
          language: "en",
          sortBy: "relevancy",
          pageSize: 30
        })
        .then(responseJson => {
          let validArticles = responseJson.articles
            .filter(
              art =>
                art.urlToImage !== null &&
                art.description !== null &&
                art.description !== undefined &&
                art.urlToImage !== undefined
            )
            .map(arti => {
              return checkImage(arti.urlToImage)
                .then(data => arti)
                .catch(err => {})
            })
          Promise.all(validArticles)
            .then(articles => articles.filter(article => !!article))
            .then(filteredArticles =>
              dispatch({
                type: "ARTICLES",
                payload: filteredArticles,
                bool: boole,
                concat: searchTerm
              })
            )
        })
    }
  }
}
