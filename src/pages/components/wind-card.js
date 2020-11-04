import React from "react"
import { Alert, Card } from "react-bootstrap"

export default function WindCard(props) {
  return props.wind === undefined ? (
    <Alert variant="danger">Data Unavailable</Alert>
  ) : (
    <Card className="text-center">
      <Card.Header>
        Wind<span role="img">🌬</span>
      </Card.Header>
      <Card.Body>
        <Card.Text className="lead">
          Speed: {props.wind.speed} m/s Direction: {props.wind.deg + "\xB0"}{" "}
          {props.wind.gust ? props.wind.gust : "No Gust"}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
