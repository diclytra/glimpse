import URLS from "./urls.js"
import "./home.css"
import Record from "./record.jsx"

const Home = () => (
  <div id="home">
    <header>
      <h1>Glimpse</h1>
    </header>
    <main>
      {URLS.map((url, inx) => (
        <Record key={inx} url={url} />
      ))}
    </main>
  </div>
)

export default Home
