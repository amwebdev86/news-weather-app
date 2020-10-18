import React from 'react'

export default function Card(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>{props.sunrise}</p>
        <p>{props.sunset}</p>
      </div>
    )
}