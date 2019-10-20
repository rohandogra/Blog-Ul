import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import postsReducer from "../reducers/postsReducers"
import authersReducers from "../reducers/authersReducers"

const configureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      authers: authersReducers
    }),
    applyMiddleware(thunk)
  )
  return store
}

export default configureStore
