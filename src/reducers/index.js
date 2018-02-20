import { combineReducers } from "redux"

let concat
const defaultState = {
  payload: [],
  searchTerm: "",
  bool: false
}
const articles = (state = defaultState, action) => {
  console.log("reducer1 ", state)
  switch (action.type) {
    case "ARTICLES":
      console.log(action.payload)
      return {
        ...state,
        payload: action.payload,
        searchTerm: action.concat,
        bool: action.bool
      }

    default:
      return state
  }
}

const favorites = (state, action) => {
  switch (action.type) {
    case "FAVORITESSUCCESS":
      return {
        ...state,
        articles: action.articles,
        status: action.status
      }
    default:
      return { ...state, status: false }
  }
}

const offClick = (state, action) => {
  console.log("reducer ", state)
  switch (action.type) {
    case "offClick":
      return {
        ...state,
        offClick: action.offClick
      }

    default:
      return { ...state, offClick: false }
  }
}

const users = (state, action) => {
  switch (action.type) {
    case "USERSUCCESS":
      return {
        ...state,
        id: action.id,
        username: action.username,
        password: action.password,
        articles: action.articles,
        status: action.status
      }

    case "USERERROR":
      return {
        ...state,
        error: action.error,
        status: action.status
      }

    default:
      return { ...state }
  }
}

export default combineReducers({ articles, offClick, users, favorites })

// import { combineReducers } from "redux"
//
// const defaultState = {
//   payload: [],
//   searchTerm: "",
//   bool: false
// }
//
// const defaultState1 = {
//   type: "USER",
//   offClick: false,
//   payload: [
//     {
//       id: 1,
//       username: "coryb08",
//       password: "123",
//       created_at: "2018-02-12T19:11:43.713Z",
//       updated_at: "2018-02-12T19:11:43.713Z"
//     }
//   ]
// }
//
// let concat
//
// const articles = (state = defaultState, action) => {
//   switch (action.type) {
//     case "ARTICLES":
//       return {
//         ...state.articles,
//         payload: action.payload,
//         searchTerm: action.concat,
//         bool: action.bool
//       }
//
//     default:
//       return state
//   }
// }
//
// const user = (state = defaultState1, action) => {
//   switch (action.type) {
//     case "USER":
//       return {
//         ...state.user,
//         payload: action.payload
//       }
//     case "NOUSER":
//       return { ...state.user, payload: action.payload }
//
//     case "OFFCLICK":
//       return { ...state.user, payload: action.payload }
//
//     default:
//       return state
//   }
// }
//
// export default combineReducers({ articles, user })
