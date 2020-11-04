import React, { useState, useEffect } from "react"
import axios from "axios"
import MainCard from "../pages/components/card"
import Temperature from "../pages/components/temperature"
import WeatherCard from "../pages/components/weather-card"
import WindCard from "../pages/components/wind-card"
import MainContainer from "../pages/components/container"
import {
  Alert,
  Button,
  Container,
  FormControl,
  InputGroup,
} from "react-bootstrap"

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

        setData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchWeather()
  }, [url])

  return (
    <MainContainer>
      <InputGroup className="p-4">
        <FormControl
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          name="query"
          placeholder="City Name"
        />
        <InputGroup.Append>
          <Button
            type="button"
            onClick={() =>
              setUrl(
                `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
              )
            }
          >
            Get Weather
          </Button>
        </InputGroup.Append>
      </InputGroup>

      {isError && <Alert variant="danger">Something went wrong...</Alert>}
      {isLoading && data ? (
        <Alert variant="warning">Loading...</Alert>
      ) : (
        <Container fluid>
          <MainCard data={data} />
          <Temperature main={data.main} />
          <WeatherCard weather={data.weather} />
          <WindCard wind={data.wind} />
        </Container>
      )}
    </MainContainer>
  )
}
