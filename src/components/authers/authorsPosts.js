import React from "react"
import { connect } from "react-redux"

function AuthorsPosts(props) {
  return (
    <div>
      <ul>{console.log("prp", props.users)}</ul>
    </div>
  )
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  return {
    users: state.posts.filter(post => id === post.userId)
  }
}

export default connect(mapStateToProps)(AuthorsPosts)
