const axios = require("axios")
const apiKey = process.env.WEATHER_API_KEY
const urlWeather = `https://api.openweathermap.org/data/2.5/`
/**
 *
 * @param {string} url
 * @param {string} endpoint
 * creates a async get request to provided url and endpoint
 */
const get = (url, endpoint) => axios.get(`${url}` + `${endpoint}`)
/**
 *
 * @param {string} query
 * takes city name as a string and passes it to the enpoint query.
 */
const getCityWeather = async query => {
  const weatherEndpoint = `weather?q=${query}&appid=${apiKey}`
  const { data: weather } = await get(urlWeather, weatherEndpoint)
  return { ...weather }
}

exports.createPages = async ({ actions: { createPage } }) => {
  const weather = await getCityWeather("louisville")
  createPage({
    path: "/",
    component: require.resolve("./src/templates/index"),
    context: {
      name: "Weather and News",
    },
  })
  createPage({
    path: `/weather/`,
    component: require.resolve("./src/templates/weather"),
    context: { weather },
  })
  createPage({
    path: "/search/",
    component: require.resolve("./src/templates/search"),
    context: { weather },
  })
}
