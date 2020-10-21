import React from "react"

export default function Temperature(props) {
  return (
    <div>
      <h4>
        Temp: {convertKelvinToFah(props.main.temp)} (
        {convertKelvinToCelsius(props.main.temp)})
      </h4>
      <p>Feels like: {convertKelvinToFah(props.main.feels_like)}</p>
      <h4>
        High: {convertKelvinToFah(props.main.temp_max)} Low:{" "}
        {convertKelvinToFah(props.main.temp_min)}
      </h4>
      <p>Humidity: {props.main.humidity} </p>

      <p>Pressure: {props.main.pressure / 100}mb</p>
    </div>
  )
}
//export these from another file.
function convertKelvinToFah(k) {
  return (((k - 273.15) * 9) / 5 + 32).toFixed(2) + " \xB0F"
}
function convertKelvinToCelsius(k) {
  return (k - 273.15).toFixed(2) + "\xB0C"
}
