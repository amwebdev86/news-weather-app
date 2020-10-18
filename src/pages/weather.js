import React from "react"
import Header from "./components/header"
import Search from "./components/search"
import Map from "./components/map"
import Container from "./components/container"

export default function Weather() {
  

  return (
    <Container>
      <Header headerText="Weather" />
      <Search />
      <Map />
    </Container>
  )
}
