import URLS from "./urls.js"
import "./home.css"
import Record from "./record.jsx"

const Home = () => (
  <>
    <h1>Glimpse</h1>
    {URLS.map((url, inx) => (
      <Record key={inx} url={url} />
    ))}
  </>
)

export default Home
