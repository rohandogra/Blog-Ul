import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { startSetPosts } from "./actions/posts"
import { startSetAUTHERS } from "./actions/authers"

import App from "./App"
import configureStore from "./store/configureStore"

// import { startSetPosts } from "./actions/posts"

const store = configureStore()
// store.dispatch() //startSetPosts()
store.dispatch(startSetPosts())
store.dispatch(startSetAUTHERS())
store.subscribe(() => {
  console.log(store.getState())
})

const ele = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(ele, document.getElementById("root"))
