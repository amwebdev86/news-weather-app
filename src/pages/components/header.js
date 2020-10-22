import React from "react"
import { Link } from "gatsby"
const linkStyles = {
  color: "white",
  display: "inline-block",
  margin: "0 0.5rem",
  padding: "0.25rem",
  textDecoration: "none",
}
export default function Header(props) {
  return (
    <header>
      <div>
        <Link to="/" activeStyle={{ color: "red" }} style={linkStyles}>
          {props.links[0]}
        </Link>
        <Link to="/weather" activeStyle={{ color: "red" }} style={linkStyles}>
          {props.links[1]}
        </Link>
      </div>
      <h1>{props.headerText}</h1>
    </header>
  )
}
