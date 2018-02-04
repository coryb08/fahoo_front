export const search = searchTerm => {
  return { type: "SEARCH", payload: searchTerm };
};

export const results = articles => {
  console.log("Articles ", articles);
  return { type: "RESULTS", payload: articles };
};
