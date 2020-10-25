import React from "react"
import Container from "../pages/components/container"
import Header from "../pages/components/header"

export default function Home({ pageContext: { news } }) {
  let id = Math.floor(Math.random() * 100)
  //if data unavalable return error msg
  return news.articles === undefined ? (
    <div>There was a problem loading news</div>
  ) : (
    <Container>
      <Header links={["Home", "Louisville", "Search"]} headerText="Home" />
      <ul>
        {news.articles.map(article => (
          <li key={(article.id = Math.random() * 100)}>
            <img src={article.urlToImage} />
            <a href={article.url}>{article.title}</a>
            <span>source: {article.source.name}</span>
          </li>
        ))}
      </ul>
    </Container>
  )
}
