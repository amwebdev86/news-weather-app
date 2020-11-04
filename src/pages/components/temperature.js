import React from "react"
import { Alert, Badge, Card } from "react-bootstrap"
import {
  convertKelvinToCelsius,
  convertKelvinToFah,
} from "../../utils/conversion"
export default function Temperature(props) {
  return props.main === undefined ? (
    <Alert variant="danger">Content unavailable</Alert>
  ) : (
    <Card className="text-center ">
      <Card.Header className="display-3">
        <Badge
          variant={
            convertKelvinToCelsius(props.main.temp) <=70.0
              ? "primary"
              : "danger"
          }
        >
          {convertKelvinToFah(props.main.temp)}
        </Badge>{" "}
        ({convertKelvinToCelsius(props.main.temp)})
      </Card.Header>
      <Card.Body>
        <Card.Title>
          High: {convertKelvinToFah(props.main.temp_max)} Low:{" "}
          {convertKelvinToFah(props.main.temp_min)}
        </Card.Title>
        <Card.Text className="text-muted">
          Feels like: {convertKelvinToFah(props.main.feels_like)}{" "}
          {props.main.humidity}
          {props.main.pressure / 100}mb
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
//export these from another file.
