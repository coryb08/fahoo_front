export const search = searchTerm => {
  return { type: "SEARCH", payload: searchTerm };
};

export const articles = articles => {
  console.log(articles)
  return { type: "ARTICLES", payload: articles };
};
