import React from "react"
import { Alert, Card } from "react-bootstrap"
import { convertUnixTime } from "../../utils/conversion"
export default function MainCard(props) {
  return props.data === undefined ? (
    <div>
      <Alert variant="danger">Content Unavailable</Alert>
    </div>
  ) : (
    <Card className="text-lg-center">
      <Card.Header className="display-1 font-weight-bold  text-info">
        {props.data.name}
      </Card.Header>
      <Card.Body>
        <Card.Title>Sunrise/Sunset</Card.Title>
        <Card.Text>
          {" "}
          <span role="img" aria-label="Sunrise">
            🌅
          </span>{" "}
          : {convertUnixTime(props.data.sys.sunrise)} am{" "}
          <span role="img" aria-label="Sunset behind buildings">
            🌇
          </span>{" "}
          : {convertUnixTime(props.data.sys.sunset)} pm
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
