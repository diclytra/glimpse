import URLS from "./urls.js"
import "./home.css"
import Record from "./record.jsx"
import { useStore } from "./store.jsx"
import refreshIcon from "/refresh.svg"

const Home = () => {
  let [reload, setReload] = useStore("reload")

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
        {URLS.map((url, inx) => (
          <Record key={inx} url={url} />
        ))}
      </main>
    </div>
  )
}

export default Home
