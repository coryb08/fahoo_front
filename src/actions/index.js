import fetch from "isomorphic-fetch";

// let nullCheck = props.articlesArray.filter(
//   arti => arti.urlToImage !== null && arti.description !== null
// );

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
        let nullCheck = responseJson.articles.filter(
          arti => arti.urlToImage !== null && arti.description !== null
        );
        dispatch({
          type: "ARTICLES",
          payload: nullCheck
        });
      });
    // return cats;
  };
}
