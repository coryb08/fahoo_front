import fetch from 'isomorphic-fetch'
import {
  OFFCLICK,
  FAVORITESSUCCESS,
  ARTICLESUCCESS,
  USERSUCCESS,
  USERERROR,
  ARTICLES
} from '../types.js'
import SERVERS_URL from '../common.js'

let boole = false
var checkImage = require('image-check')

export function handleOffClick(bool) {
  return {
    type: OFFCLICK,
    offClick: bool
  }
}

export function handleFavorites(user, bool = false) {
  return function(dispatch, getState) {
    fetch(`http://localhost:3000/users/${user.id}.json`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-User-Email': getState().users.email,
        'X-User-Token': getState().users.auth_token
      }
    })
      .then(res => res.json())
      .then(json => {
        return dispatch({
          type: FAVORITESSUCCESS,
          articles: json.articles,
          status: bool
        })
      })
  }
}

export function handleLike(props, user) {
  return async (dispatch, getState) => {
    console.log(getState())
    fetch(
      `http://localhost:3000/articles.json`,

      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-User-Email': getState().users.email,
          'X-User-Token': getState().users.auth_token
        },
        body: JSON.stringify({
          article: {
            url: props.url,
            urlToImage: props.urlToImage,
            title: props.title,
            user_id: user
          }
        })
      }
    )
      .then(res => res.json())
      .then(json => {
        return dispatch({
          type: ARTICLESUCCESS,
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
    return alert('Passwords do not match')
  } else {
    return async dispatch => {
      try {
        fetch(`http://localhost:3000/users.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              email: argObj.email,
              password: argObj.password,
              password_confirmation: argObj.passwordMatch
            }
          })
        })
          .then(res => res.json())
          .then(json => {
            console.log(json)
            return dispatch({
              type: USERSUCCESS,
              id: json.id,
              email: json.email,
              articles: [],
              status: 'good',
              auth_token: json.authentication_token
            })
          })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export function signIn(argObj) {
  return function(dispatch) {
    fetch(`http://localhost:3000/users/sign_in.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: argObj.email,
          password: argObj.password
        }
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json) {
          return dispatch({
            type: USERSUCCESS,
            id: json.id,
            email: json.email,
            articles: json.articles,
            status: 'good',
            auth_token: json.authentication_token
          })
        } else {
          alert('email and/or password is incorrect.')
          return dispatch({
            type: USERERROR,
            error: 'Password is incorrect',
            status: undefined
          })
        }
      })
  }
}

export function fetchArticles(searchTerm = '') {
  let NewsAPI = require('../newsapi')
  const newsapi = new NewsAPI('3f9e3c8d8e1646bbb2e9afa8979b0335')

  let link =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335'
  return function(dispatch) {
    if (searchTerm === '') {
      return fetch(link)
        .then(res => res.json())

        .then(responseJson => {
          let nullCheck = responseJson.articles.filter(
            arti =>
              arti.urlToImage !== null &&
              arti.description !== null &&
              arti.description !== ''
          )
          dispatch({
            type: ARTICLES,
            payload: nullCheck,
            bool: boole,
            concat: ''
          })
        })
    } else {
      return newsapi.v2
        .everything({
          q: searchTerm,
          language: 'en',
          sortBy: 'relevancy',
          pageSize: 40
        })
        .then(responseJson => {
          let validArticles = responseJson.articles

            .filter(
              art =>
                art.urlToImage !== null &&
                art.description !== null &&
                art.description !== ''
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
                type: ARTICLES,
                payload: filteredArticles,
                bool: boole,
                concat: searchTerm
              })
            )
        })
    }
  }
}
