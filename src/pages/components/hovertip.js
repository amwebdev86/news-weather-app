import React from "react"
import { Tooltip } from "react-bootstrap"

export default function Tip(props) {
  return <Tooltip>{props.message}</Tooltip>
}
