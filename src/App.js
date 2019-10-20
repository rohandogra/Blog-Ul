import React from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Posts from "./components/posts/posts"
import PostsInfo from "./components/posts/postsInfo"

import Auther from "./components/authers/auther"
import AuthorPosts from "./components/authers/authorsPosts"

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar color="light" expand="lg" className="danger">
          <NavbarBrand href="/" className="mr-auto">
            Home
          </NavbarBrand>

          <Nav className="mr-center">
            <NavItem>
              <NavLink tag={Link} to="/posts">
                Posts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/authors">Auther</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users/user">users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Form</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/posts" component={Posts} exact={true} />
          <Route path={`/posts/:id`} component={PostsInfo} exact={true} />
          <Route path="/authors" component={Auther} exact={true} />
          <Route path="/authors/:id" component={AuthorPosts} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
