import fetch from "isomorphic-fetch";

let boole = false;

export const search = searchTerm => {
  if (searchTerm === "") {
    boole = false;
  } else {
    boole = true;
  }

  return { type: "SEARCH", payload: searchTerm, bool: boole };
};

export function fetchArticles() {
  return function(dispatch) {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335"
    )
      .then(res => res.json())
      .then(responseJson => {
        dispatch({
          type: "ARTICLES",
          payload: responseJson.articles
        });
      });
    // return cats;
  };
}
