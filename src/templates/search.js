import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import styles from "../pages/weather-result.module.css"
import Card from "../pages/components/card"
import Temperature from "../pages/components/temperature"
import WeatherCard from "../pages/components/weather-card"
import Header from "../pages/components/header"
import Container from "../pages/components/container"

const apiKey = process.env.WEATHER_API_KEY
/**
 * Weather Search Component
 * it takes no props but has state which changes on a new URL
 * which becomes updated when user inputs a new city.
 */
export default function Search({ pageContext: { weather } }) {
  const [data, setData] = useState({
    weather: [],
    sys: {},
    main: {},
    wind: {},
  })
  const [query, setQuery] = useState(weather.name)
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
    <Container>
      <Fragment>
        <Header
          links={["Home", "Louisville", "Search"]}
          headerText={data.name + "Weather"}
        />
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
        {isLoading && !data ? (
          <div>Loading...</div>
        ) : (
          <div>
            <Card data={data} />
            <WeatherCard weather={data.weather} />
            <Temperature main={data.main} />
          </div>
        )}
      </Fragment>
    </Container>
  )
}
