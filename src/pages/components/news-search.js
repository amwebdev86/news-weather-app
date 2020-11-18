import React, { useState, useEffect } from "react"
import axios from "axios"
import MainContainer from "../pages/components/container"
import { Button, FormControl, InputGroup } from "react-bootstrap"
const newsKey = process.env.NEWS_KEY
const newsURL = `http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${newsKey}`
export default function NewsSearch() {
  const [url, setURL] = useState(newsURL)
  const [data, setData] = useState({
    articles: [],
  })
  const [query, setQuery] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const results = await axios(url)
      setData(results.data)
    }
    fetchNews()
  }, [url])

  return (
    <MainContainer>
      <InputGroup>
        <FormControl
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          name="query"
          placeholder="Search"
        />
        <InputGroup.Append>
          <Button
            type="button"
            onClick={() =>
              setURL(
                `http://newsapi.org/v2/everything?q=${query}&from=2020-10-18&sortBy=publishedAt&apiKey=${newsKey}`
              )
            }
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </MainContainer>
  )
}
