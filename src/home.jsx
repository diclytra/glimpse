import URLS from "./urls.js"
import "./home.css"
import Record from "./record.jsx"
import { useStore } from "./store.jsx"

const Home = () => {
  let [data, setData] = useStore("name")
  setData("Glipse")
  return (
    <div id="home">
      <header>
        <h1>{data}</h1>
      </header>
      <main>
        {URLS.map((url, inx) => (
          <Record key={inx} url={url} />
        ))}
      </main>
    </div>
  )
}

export default Home
