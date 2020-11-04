import React from "react"
import {
  Alert,
  ListGroup,
  Tooltip,
  Image,
  OverlayTrigger,
} from "react-bootstrap"
export default function WeatherCard(props) {
  return props.weather === undefined ? (
    <Alert variant="danger">Content Unavailable</Alert>
  ) : (
    <ListGroup horizontal="lg">
      {props.weather.map(item => (
        <ListGroup.Item key={item.id}>
          <OverlayTrigger
            trigger="focus"
            overlay={<Tooltip>{item.main}</Tooltip>}
          >
            <Image
              src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.main.toString()}
              aria-label={item.main}
              thumbnail
            />
          </OverlayTrigger>

          <ListGroup.Item>{item.description.toUpperCase()}</ListGroup.Item>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
