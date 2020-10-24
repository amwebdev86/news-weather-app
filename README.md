# Weather and News app
[Imgur](https://i.imgur.com/AD1bWQx.png)
Get the latest weather for any city by searching the city name and retrieving data from the openweather.org API. This project was created using Gatsby.
This project was created following the project requirements for [Code Louisville](https://codelouisville.org/) which are detailed below.

## Development
The application is broken into several components including 3 template components using createPages() a node.js API method in Gatsby. The created pages corresponding components are provided the pageContext as props which is the returned JSON from [Open weather](https://openweathermap.org). The [Search component](https://github.com/amwebdev86/news-weather-app/blob/master/src/templates/search.js) displays a text field and button that allows the user to enter and update the query in the API endpoint. initially the page displays no information until the component mounts. After intial mount the component updates it's state whenever the query changes from user input. The displayed information on the [temperature](https://github.com/amwebdev86/news-weather-app/blob/dev/src/pages/components/temperature.js) card use functions I created to transform the data from Kelvins to Fahrenheit and Celsius respectively:
```js
function convertKelvinToFah(k) {
  return (((k - 273.15) * 9) / 5 + 32).toFixed(2) + " \xB0F"
}
function convertKelvinToCelsius(k) {
  return (k - 273.15).toFixed(2) + "\xB0C"
}


  ( props.main ===undefined ? <div>Content unavailable</div> : <div>
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
    </div>)
  )
```



Below are the details on why I chose certain methods and APIs.

## Key decisions

 - [GATSBY](https://www.gatsbyjs.com/) In scope of the project requirements I decided to use a framework which was a bonus requirment. The decision was made to add a bit of a challenge and learn a new framework. Gatsby is a React based open source framework that will generate static sites. 
- [creatPages](https://www.gatsbyjs.com/docs/node-apis/#createPages) is a Node.js API in Gatsby this was used in gatsby-node.js file to create the initial pages. The main reason for using this method is to provide the initial weather data to the search and /Louisville page. the file reaches out the endpoint and gets the intial call to the api. In future iterations I plan on using Gatsby's data layer and GraphiQL or createPagesStatefully.
- I used React function components keep code length down and used useState() to store the objects being retrieved and useEffect() to update the component state:
```js
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
```  
useEffect fetches the data using Axio:
```js
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
```

- I decided to fetch the data with axio vs using GraphiQL. This was based on time constraints and learning GraphiQL was not the focus of this project. Future iterations will take advantage of the data layer and GraphiQL queries.

- Upon attempting to build the project I had issues with variables being undefined due to the nature of Gatsby site generation of static pages. I was unable to retrieve the data from the API and therefore could not build the page. The workaround I produced was using ternary conditionals within the display components.
example:
```js
import React from "react"
export default function Temperature(props) {
  return (
  ( props.main ===undefined ? <div>Content unavailable</div> : <div>
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
    </div>)
  )
}


``` 
## Installation
You can view the deployed version [HERE]() 
### Fork or download
1. download and install the Gatsby CLI following these instructions [HERE](https://www.gatsbyjs.com/tutorial/part-zero/)
2. download the project and open your terminal and run the command ``` npm install ``` to install and update any required dependancies.
3. You will need to provide an API key to retrieve the API you can get the key [HERE](https://openweathermap.org/guide). Below are more details on adding api Key.
4. run the command ``` gatsby develop ``` to start up development server and open your browser and navigate to http://localhost:8000/ [localhost](http://localhost:8000/)

### Adding API Key
(if you wish to view the application without a key you can access the deployed version on [Netlify]() )
- Hard-code the api in gatsby-node.js on line 2 . the defaults city is Louisville you can also change this in the weatherEndpoint on line 4
```js
const axios = require("axios");
const apiKey = process.env.WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/`;
const weatherEndpoint = `weather?q=Louisville&appid=${apiKey}`;
//...
```
- Add api key via .env file
Alternatively, you can create a .env.development file in the root of the project and create a variable named WEATHER_API_KEY
example 
```
WEATHER_API_KEY=YOURAPIKEYHERE

```
