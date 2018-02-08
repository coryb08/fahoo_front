import fetch from "isomorphic-fetch"

let boole = false
var checkImage = require("image-check")

export function fetchArticles(searchTerm = "") {
  function imageChecker(json) {
    let newArr = []
    function filterFunc(res) {}
    // console.log("newArr ", newArr)
    return newArr
  }
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
            arti => arti.urlToImage !== null
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
          // console.log("res ", responseJson);
          // debugger;
          // let filtered = imageChecker(responseJson);
          // let results = await Promise.all()
          let validArticles = []
          for (var i = 0; i < responseJson.articles.length; i++) {
            let arti = responseJson.articles[i]

            checkImage(arti.urlToImage)
              .then(data => {
                const width = data.width
                const height = data.height
                const url = data.url
                return arti
              })
              .catch(err => {})
              .then(art => {
                if (art) validArticles.push(art)
                dispatch({
                  type: "ARTICLES",
                  payload: validArticles,
                  bool: boole,
                  concat: searchTerm
                })
              })
          }
          // return validArticles
        })
      // .then(validArticles => {
      //   debugger
      //   dispatch({
      //     type: "ARTICLES",
      //     payload: validArticles,
      //     bool: boole,
      //     concat: searchTerm
      //   })
      // })
    }
  }
}
