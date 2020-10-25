const axios = require("axios")
const apiKey = process.env.WEATHER_API_KEY
const newsKey = process.env.NEWS_KEY
const urlWeather = `https://api.openweathermap.org/data/2.5/`
const urlNews = ` http://newsapi.org/v2/`

/**
 *
 * @param {string} url
 * @param {string} endpoint
 * creates a async get request to provided url and endpoint
 */
const get = (url, endpoint) => axios.get(`${url}${endpoint}`).catch(err=> err)
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

const getNews = async () => {
  const newsEndpoint = `top-headlines?country=us&apiKey=${newsKey}`
  const { data: news } = await get(urlNews, newsEndpoint)
  return { ...news }
}

exports.createPages = async ({ actions: { createPage } }) => {
  const weather = await getCityWeather("louisville")
  const news = await getNews()

  createPage({
    path: "/",
    component: require.resolve("./src/templates/index"),
    context: {
     news
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
