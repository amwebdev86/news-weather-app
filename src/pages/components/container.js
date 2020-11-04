import React from "react"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Nav from "react-bootstrap/Nav"
import { Button, NavItem } from "react-bootstrap"
export default function MainContainer({ children }) {
  return (
    <Container fluid>
      <Jumbotron fluid>
        <h1 className="display-1 text-center text-light bg-dark">
          News and Weather
        </h1>
        <Nav fill className="justify-content-center" defaultActiveKey="/">
          <NavItem>
            <Button variant="outline-primary" size="lg" href="/" block>
              Home
            </Button>
          </NavItem>
          <NavItem>
            <Button variant="outline-primary" href="/search" size="lg" block>
              Check Weather
            </Button>
          </NavItem>
          <NavItem>
            <Button
              variant="outline-primary"
              href="https://github.com/amwebdev86/news-weather-app"
              target="_blank"
              size="lg"
              block
            >
              Github
            </Button>
          </NavItem>
        </Nav>
      </Jumbotron>
      <div className="container-fluid">{children}</div>
    </Container>
  )
}
