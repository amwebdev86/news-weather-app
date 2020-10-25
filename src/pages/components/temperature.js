import React from "react"
import {
  convertKelvinToCelsius,
  convertKelvinToFah,
} from "../../utils/conversion"
export default function Temperature(props) {
  return props.main === undefined ? (
    <div>Content unavailable</div>
  ) : (
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
