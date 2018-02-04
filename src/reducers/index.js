const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SEARCH":
      return action.searchTerm;

    default:
      return state;
  }
};

export default reducer;
