import React from 'react';
import Container from "../pages/components/container"
import Header from "../pages/components/header"
export default function Home({ pageContext: { name } }) {
  return (
    <Container>
      <div>
        <Header headerText={name} links={["Home", "Louisville", "Search"]} />
      </div>
    </Container>
  )
}
