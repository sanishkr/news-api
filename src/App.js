import React, { useEffect, useState } from "react";
import "./styles.css";
import NewsList from "./components/NewsList";
import {debounce} from './utils'

const API_KEY = 'ec72ce54adf14e40a7e0450efae4da60';
const URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey'

const getNewsResult = debounce((q) => {
  fetch(`${URL}/everything?q=${q}&apiKey=${API_KEY}`)
    .then(data => data.json())
    .then((data) => {
      console.log({ data })
      return data.articles
    })
    .catch((err) => console.error(err))
}, 300)

export default function App() {
  const [query, setQuery] = useState('')
  const [res, setRes] = useState([])
  useEffect(() => {
    if (query) {
      const results = getNewsResult(query.trim())
      setRes(results)
    }
  }, [query])

  return (
    <div className="App">
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <NewsList/>
    </div>
  );
}
