import React from "react";
import { Link } from "gatsby";

export default function Header(props) {
    return (
      <header>
        <div>
          <Link to="/">Home</Link>
          <Link to="/weather">Check Weather</Link>
        </div>
        <h1>{props.headerText}</h1>
      </header>
    )
}