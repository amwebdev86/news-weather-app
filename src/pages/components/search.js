import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import styles from "../weather-result.module.css"
import Card from "./card"
import Temperature from "./temperature"
import WeatherCard from "./weather-card"

const apiKey = process.env.WEATHER_API_KEY
/**
 * Weather Search Component
 * it takes no props but has state which changes on a new URL
 * which becomes updated when user inputs a new city.
 */
export default function Search() {
  const [data, setData] = useState({ weather: [], sys: [], main: [] })
  const [query, setQuery] = useState("Louisville")
  const [url, setUrl] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=${apiKey}`
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchWeather = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(url)
        /**
         * REMOVE AFTER DEV
         */
        //console.dir(result.data)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchWeather()
  }, [url])

  return (
    <Fragment>
      <label htmlFor="query">Enter City:</label>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        name="query"
      />
      <button
        type="button"
        onClick={() =>
          setUrl(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
          )
        }
      >
        Get Weather
      </button>
      {isError && <div className={styles.error}>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Card
            name={data.name}
            sunrise={data.sys.sunrise}
            sunset={data.sys.sunset}
          />
          <Temperature main={data.main} />
          <WeatherCard weather={data.weather} />
        </div>
      )}
    </Fragment>
  )
}
