import React from "react"

export default function Card(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h4>Sunrise: {convertUnixTime(props.data.sys.sunrise)} am </h4>
      <h4> Sunset: {convertUnixTime(props.data.sys.sunset)} pm</h4>
    </div>
  )
}

function convertUnixTime(unix) {
  let unix_timeStamp = unix
  const date = new Date(unix_timeStamp * 1000)
  let hours = date.getHours()
  let mins = "0" + date.getMinutes()
  return `${hours > 12 ? hours - 12 : hours}:${mins.substr(-2)}`
}
