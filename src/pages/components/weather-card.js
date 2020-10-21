import React from "react"

export default function WeatherCard(props) {
  return (
    <ul>
      {props.weather.map(item => (
        <li key={item.id}>
          <img
            src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
            alt="Current weather icon"
          />
          <p>{item.main}</p>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
