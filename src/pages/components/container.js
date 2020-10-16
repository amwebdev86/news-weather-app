import React from "react"
import contanerStyles from "./container.module.css"

export default function Container({ children }) {
  return (
    <div className={contanerStyles.wrapper}>
      <h3>MyAPI</h3>
      <div className={contanerStyles.main}>{children}</div>
    </div>
  )
}
