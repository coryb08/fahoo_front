

const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload;

    case "ARTICLES":
      return action.payload;

    default:
      return state;
  }



};

export default reducer;
