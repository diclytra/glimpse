import URLS from "./urls.js"
import "./home.css"
import Record from "./record.jsx"
import { useStore } from "./store.jsx"

const Home = () => {
  let [reload, setReload] = useStore("reload")

  return (
    <div id="home">
      <header>
        <h1>Glimpse</h1>
        <h1>
          <input
            type="button"
            value="Reload"
            onClick={() => setReload(!reload)}
          />
        </h1>
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
