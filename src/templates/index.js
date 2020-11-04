import React from "react"
import { Alert, Nav, Card, CardColumns } from "react-bootstrap"
import MainContainer from "../pages/components/container"
import { truncateString } from "../utils/conversion"

export default function Home({ pageContext: { news } }) {
  //if data unavalable return error msg
  return news.articles === undefined ? (
    <MainContainer>
      <Alert variant="danger">There was a problem loading news</Alert>
    </MainContainer>
  ) : (
    <MainContainer>
      <CardColumns>
        {news.articles.map(article => (
          <Card key={(article.id = Math.random() * 100)}>
            <Card.Img variant="top" src={article.urlToImage} alt="article" />
            <Card.Body>
              <Card.Title>
                {truncateString(article.title, 100, "...")}
              </Card.Title>
              <Card.Text>
                <Nav.Link href={article.url} target="_blank">
                  More
                </Nav.Link>
              </Card.Text>
              <Card.Footer className="text-muted">
                source: {article.source.name}
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </MainContainer>
  )
}
