import React, { Component } from 'react'
// import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";
import NewsList from "./components/NewsList";
import {debounce} from './utils'

const API_KEY = 'ec72ce54adf14e40a7e0450efae4da60';
const URL = 'https://newsapi.org/v2'


export default class App extends Component {
  state = {
    query: '',
    res: [],
    errMsg: ''
  }

  getNewsResult = debounce((q) => {
    console.log({query: this.state.query});
    fetch(`${URL}/everything?q=${this.state.query}&apiKey=${API_KEY}`)
    .then(data => data.json())
    .then((data) => {
      console.log({ data })
      this.setState({
        res: data.articles
      })
    })
    .catch((err) => {
      console.error(err)
      this.setState({
        errMsg: err.status
      })
    })
  }, 300);

  inputHanlder = (q) => {
    if (q) {
      this.setState({
        query: q
      })
      this.getNewsResult(q.trim())
    }
  }

  render() {
    const {errMsg, res} = this.state;
    return (
      <div className="App">
      <input type="text" onChange={(e) => this.inputHanlder(e.target.value)} placeholder="Enter query to search news..." />
      <span className="err-msg">{errMsg}</span>
      <NewsList news={res}/>
    </div>
    )
  }
}


// export default function App() {
//   const [query, setQuery] = useState('')
//   const [res, setRes] = useState([])
//   const [errMsg, setErrMsg] = useState([])
//   useEffect(() => {
//     if (query) {
//       getNewsResult(query.trim())
//     }
//   }, [query])
  
//   const getNewsResult = useCallback(debounce((q) => {
//     console.log({query});
//     fetch(`${URL}/everything?q=${query}&apiKey=${API_KEY}`)
//     .then(data => data.json())
//     .then((data) => {
//       console.log({ data })
//       setRes(data.articles)
//     })
//     .catch((err) => {
//       console.error(err)
//       setErrMsg(err.status)
//     })
//   }, 300), [query])

//   console.log({res})
//   return (
//     <div className="App">
//       <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Enter query to search news..." />
//       <span className="err-msg">{errMsg}</span>
//       <NewsList news={res}/>
//     </div>
//   );
// }
