import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import styles from "../weather-result.module.css"
const apiKey = process.env.WEATHER_API_KEY;
export default function Search() {
  const [data, setData] = useState({ weather: [] })
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
        console.log(apiKey)

        const result = await axios(url)
        setData(result.data);
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchWeather()
  }, [url])

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
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
            <h1>{data.name}</h1>
         
        
          <ul>
            {data.weather.map(item => (
              <li key={item.id}>
                <p>{item.main}</p>
                <p>{item.description}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${item.icon}@2x.png` } alt="Current weather icon"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  )
}
function convertKelvinToFah(k) {
  return ((k - 273.15) * 9) / 5 + 32
}
