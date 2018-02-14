import fetch from "isomorphic-fetch"

let boole = false
var checkImage = require("image-check")

export function handleOffClick(bool) {
  return {
    type: "offClick",
    offClick: bool
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
            arti => arti.urlToImage !== null && arti.description !== null
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
          pageSize: 20
        })
        .then(responseJson => {
          let validArticles = responseJson.articles

            .filter(art => art.urlToImage !== null && art.description !== null)

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

// import fetch from "isomorphic-fetch"
//
// let boole = false
// var checkImage = require("image-check")
// let offclick = false
//
// let defaultPayload = {
//   id: 1,
//   offClick: offclick,
//   username: "coryb08",
//   password: "123",
//   created_at: "2018-02-12T19:11:43.713Z",
//   updated_at: "2018-02-12T19:11:43.713Z"
// }
// export function fetchUser(argObj) {
//   // fetch("http://localhost:3000/users")
//   // .then(res => res.json())
//   // .then(json => {
//   offclick = false
//   if (argObj.username === "" || argObj.password === "") {
//     return {
//       type: "NOUSER",
//       offClick: offclick,
//       payload: defaultPayload
//     }
//   } else if (argObj.username === null) {
//     offclick = true
//     return {
//       type: "OFFCLICK",
//       offClick: offclick,
//       payload: defaultPayload
//     }
//   } else {
//     return {
//       type: "USER",
//       offClick: offclick,
//       payload: defaultPayload
//     }
//   }
//   // })
// }
//
// export function fetchArticles(searchTerm = "") {
//   const NewsAPI = require("newsapi")
//   const newsapi = new NewsAPI("3f9e3c8d8e1646bbb2e9afa8979b0335")
//
//   let link =
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335"
//   return function(dispatch) {
//     if (searchTerm === "") {
//       return fetch(link)
//         .then(res => res.json())
//         .then(responseJson => {
//           let validArticles = responseJson.articles
//             .filter(
//               art =>
//                 art.urlToImage !== null &&
//                 art.description !== null &&
//                 art.description !== undefined &&
//                 art.urlToImage !== undefined
//             )
//             .map(arti => {
//               return checkImage(arti.urlToImage)
//                 .then(data => arti)
//                 .catch(err => {})
//             })
//           Promise.all(validArticles)
//             .then(articles => articles.filter(article => !!article))
//             .then(filteredArticles =>
//               dispatch({
//                 type: "ARTICLES",
//                 payload: filteredArticles,
//                 bool: boole,
//                 concat: searchTerm
//               })
//             )
//         })
//     } else {
//       return newsapi.v2
//         .everything({
//           q: searchTerm,
//           language: "en",
//           sortBy: "relevancy",
//           pageSize: 30
//         })
//         .then(responseJson => {
//           let validArticles = responseJson.articles
//             .filter(
//               art =>
//                 art.urlToImage !== null &&
//                 art.description !== null &&
//                 art.description !== undefined &&
//                 art.urlToImage !== undefined
//             )
//             .map(arti => {
//               return checkImage(arti.urlToImage)
//                 .then(data => arti)
//                 .catch(err => {})
//             })
//           Promise.all(validArticles)
//             .then(articles => articles.filter(article => !!article))
//             .then(filteredArticles =>
//               dispatch({
//                 type: "ARTICLES",
//                 payload: filteredArticles,
//                 bool: boole,
//                 concat: searchTerm
//               })
//             )
//         })
//     }
//   }
// }
