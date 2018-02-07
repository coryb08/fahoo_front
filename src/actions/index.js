import fetch from "isomorphic-fetch";

let boole = false;

export function fetchArticles(searchTerm = "") {
  const NewsAPI = require("newsapi");
  const newsapi = new NewsAPI("3f9e3c8d8e1646bbb2e9afa8979b0335");

  let link =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335";
  return function(dispatch) {
    if (searchTerm === "") {
      return fetch(link)
        .then(res => res.json())

        .then(responseJson => {
          let nullCheck = responseJson.articles.filter(
            arti => arti.urlToImage !== null && arti.description !== null
          );
          dispatch({
            type: "ARTICLES",
            payload: nullCheck,
            bool: boole,
            concat: ""
          });
        });
    } else {
      return newsapi.v2
        .everything({
          q: searchTerm,
          language: "en",
          sortBy: "relevancy",
          pageSize: 20
        })
        .then(responseJson => {
          let nullCheck = responseJson.articles.filter(
            arti => arti.urlToImage !== null && arti.description !== null
          );
          dispatch({
            type: "ARTICLES",
            payload: nullCheck,
            bool: boole,
            concat: searchTerm
          });
        });
    }
  };
}
