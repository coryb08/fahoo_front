import { combineReducers } from "redux"

const defaultState = {
  payload: [],
  searchTerm: "",
  bool: false
}
const articles = (state = defaultState, action) => {
  switch (action.type) {
    case "ARTICLES":
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


This would be much cleaner imo:

export class ButcherShop extends React.component{
  render() {
return(<div class="butcher-shop">
<div>
  <p>'Hello! We have the following products for sale today'</p>
  <ul>
  <li>'Tenderloin'</li>
  <li>'Short ribs'</li>
  <li>'Beef shin'</li>
  <li>'Ribeye'</li>
  </ul>
  </div>
</div>)
  }
}
