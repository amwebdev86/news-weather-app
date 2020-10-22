import Header from "../pages/components/header"
import Temperature from "../pages/components/temperature"
import WeatherCard from "../pages/components/weather-card"
import Container from "../pages/components/container"
import Card from "../pages/components/card"

export default function Weather({ pageContext: { weather } }) {
  return (
    <Container>
      {
        <div>
          <Header headerText={weather.name} links={["Home", "Louisville", "Search"]} />
          <Card data={weather} />
          <Temperature main={weather.main} />
          <WeatherCard weather={weather.weather} />
        </div>
      }
    </Container>
  )
}
