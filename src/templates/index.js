import React from "react"
import Container from "../pages/components/container"
import Header from "../pages/components/header"
import { truncateString } from "../utils/conversion"

export default function Home({ pageContext: { news } }) {
  //if data unavalable return error msg
  return news.articles === undefined ? (
    <div>There was a problem loading news</div>
  ) : (
    <Container>
      <Header links={["Home", "Weather"]} headerText="Home" />
      <ul>
        {news.articles.map(article => (
          <li key={(article.id = Math.random() * 100)}>
            <img src={article.urlToImage} />
            <a href={article.url}>{truncateString(article.title, 50, "...")}</a>
            <span>source: {article.source.name}</span>
          </li>
        ))}
      </ul>
    </Container>
  )
}
