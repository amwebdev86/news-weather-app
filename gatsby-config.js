/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-patronus`,
      options: {
        apiKey: process.env.WEATHER_API_KEY,
        mapApiKey : process.env.MAP_API_KEY
      },
    },
  ],
}
