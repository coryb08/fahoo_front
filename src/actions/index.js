import fetch from "isomorphic-fetch";

export const search = searchTerm => {
  return { type: "SEARCH", payload: searchTerm };
};

// export const fetchArticles = articles => {
//   fetch(
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335"
//   )
//     .then(res => res.json())
//     .then(json => {
//       return {
//         type: "ARTICLES",
//         payload: json.articles
//       };
//     });
// };

// export const fetchArticles = () => {
//   return dispatch => {
//     dispatch({ type: "START_ARTICLES_REQUEST" });
//     return fetch(
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335"
//     )
//       .then(response => response.json())
//       .then(json => dispatch({ type: "ARTICLES", payload: json.articles }));
//   };
// };

// export const fetchArticles = fetchArticless();

export function fetchArticles() {
  return function(dispatch) {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335"
    )
      .then(res => res.json())
      .then(responseJson => {
        dispatch({ type: "ARTICLES", payload: responseJson.articles });
      });
    // return cats;
  };
}
