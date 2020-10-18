import React from 'react'

export default function WindCard(props) {
    return (
      <div>
        <h3>Speed: {props.wind.speed} m/s</h3>
            <h4>Direction: {props.wind.deg + "\xB0"}</h4>
            <p>{props.wind.gust ? props.wind.gust:'No Gust'}</p>
      </div>
    )
}