import React from "react"
import containerStyles from "./container.module.css"

export default function Container({ children }) {
  return (
    <div className={containerStyles.wrapper}>
      <h3>Weather app</h3>
      <div>{children}</div>
    </div>
  )
}
