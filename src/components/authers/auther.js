import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

function Auther(props) {
  return (
    <div>
      <h2>Listion Authors- {props.authers.length}</h2>
      <ul>
        {props.authers.map(author => {
          return (
            <li>
              <Link to={`/authors/${author.id}`}>{author.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  return { authers: state.authers }
}

export default connect(mapStateToProps)(Auther)
