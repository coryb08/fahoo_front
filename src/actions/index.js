import fetch from "isomorphic-fetch"

let boole = false
var checkImage = require("image-check")

export function handleOffClick(bool) {
  return {
    type: "offClick",
    offClick: bool
  }
}

// ----------------------------------------------

export function handleFavorites(user, bool = false) {
  return function(dispatch) {
    fetch(`https://fahooback.herokuapp.com/users/${user.id}`)
      .then(res => res.json())
      .then(json => {
        return dispatch({
          type: "FAVORITESSUCCESS",
          articles: json.articles,
          status: bool
        })
      })
  }
}

export function handleLike(props, user) {
  return function(dispatch) {
    fetch(`https://fahooback.herokuapp.com/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: props.url,
        urlToImage: props.urlToImage,
        title: props.title,
        user_id: user
      })
    })
      .then(res => res.json())
      .then(json => {
        return dispatch({
          type: "ARTICLESUCCESS",
          id: json.id,
          url: json.url,
          urlToImage: json.urlToImage,
          title: json.title,
          user_id: json.user_id
        })
      })
  }
}

export function createUser(argObj) {
  if (argObj.password !== argObj.passwordMatch) {
    return alert("Passwords do not match")
  } else {
    return function(dispatch) {
      fetch("https://fahooback.herokuapp.com/users")
        .then(res => res.json())
        .then(json => {
          let duplicate = json.find(user => user.username === argObj.username)
          if (duplicate !== undefined) {
            return alert("Username is already taken")
          } else {
            return fetch(`https://fahooback.herokuapp.com/users`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: argObj.username,
                password: argObj.password
              })
            })
              .then(res => res.json())
              .then(json => {
                return dispatch({
                  type: "USERSUCCESS",
                  id: json.id,
                  username: json.username,
                  articles: [],
                  status: "good"
                })
              })
          }
        })
    }
  }
}

export function fetchUser(argObj) {
  return function(dispatch) {
    fetch("https://fahooback.herokuapp.com/users")
      .then(res => res.json())
      .then(json => {
        let userCheck = json.find(user => user.username === argObj.username)
        if (userCheck !== undefined && userCheck.password === argObj.password) {
          return dispatch({
            type: "USERSUCCESS",
            id: userCheck.id,
            username: userCheck.username,
            articles: userCheck.articles,
            password: userCheck.password,
            status: "good"
          })
        } else {
          alert("Username and/or password is incorrect.")
          return dispatch({
            type: "USERERROR",
            error: "Password is incorrect",
            status: undefined
          })
        }
      })
  }
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
          let nullCheck = responseJson.articles.filter(
            arti =>
              arti.urlToImage !== null &&
              arti.description !== null &&
              arti.description !== ""
          )
          dispatch({
            type: "ARTICLES",
            payload: nullCheck,
            bool: boole,
            concat: ""
          })
        })
    } else {
      return newsapi.v2
        .everything({
          q: searchTerm,
          language: "en",
          sortBy: "relevancy",
          pageSize: 40
        })
        .then(responseJson => {
          let validArticles = responseJson.articles

            .filter(
              art =>
                art.urlToImage !== null &&
                art.description !== null &&
                art.description !== ""
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
