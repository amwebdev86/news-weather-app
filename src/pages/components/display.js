import React, { useState, useEffect } from "react"

export default function Display(props) {
  const [data, setData] = useState({})
  useEffect(
    () => {
      setData(props)
    },
    { props }
  )
  console.dir(data)
  return (
    <div>
      <h1>{props.data.name}</h1>
          
      <ul>
        {props.data.weather.map(item => (
          <li key={item.id}>
            <img
              src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt="Current weather icon"
            />
            <h3>{item.main}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
function convertKelvinToFah(k) {
  return (((k - 273.15) * 9) / 5 + 32).toFixed(2) + " \xB0F"
}
function convertKelvinToCelsius(k) {
  return (k - 273.15).toFixed(2) + "\xB0C"
}
