import React from 'react'

export default function Temperature(props) {
    return (
      <div>
            <h3>Temp: {convertKelvinToFah(props.main.temp)} ({convertKelvinToCelsius(props.main.temp)})</h3>
            
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