import React from "react"

import { connect } from "react-redux"

function PostsInfo(props) {
  return (
    <div>
      {props.post && (
        <div>
          <h1>Title: {props.post.title}</h1>
          <p>{props.post.body}</p>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  console.log("ooo", state.posts.find(pp => id === id))
  return {
    post: state.posts.find(post => id === id)
  }
}

export default connect(mapStateToProps)(PostsInfo)
