/* Ruslan Sendecky <ruslan.sendecky@nab.com.au> */
/************************************************/

import { useState, useEffect } from "react"
import "./home.css"
import Record from "./record.jsx"
import { useStore } from "./store.jsx"
import refreshIcon from "/refresh.svg"

const Home = () => {
  let [reload, setReload] = useStore("reload")
  let [urls, setUrls] = useState([])

  useEffect(() => {
    getUrls().then((arr) => setUrls(arr))
  }, [])

  return (
    <div id="home">
      <header>
        <h1>Glimpse</h1>
        <img
          onClick={() => setReload(!reload)}
          src={refreshIcon}
          className="icon"
          alt="Refresh Icon"
        />
      </header>
      <main>
        {urls.length === 0
          ? null
          : urls.map((url, inx) => <Record key={inx} url={url} />)}
      </main>
    </div>
  )
}

const getUrls = () => {
  return fetch("urls.json", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((jsn) => jsn.urls)
}

export default Home
