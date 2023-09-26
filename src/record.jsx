import { useState, useEffect } from "react"
import "./record.css"

const Record = ({ url }) => {
  const [data, setData] = useState({ name: getName(url), status: 0 })

  useEffect(() => {
    fetch(url, { method: "GET", mode: "cors" })
      .then((res) => {
        setData({ ...data, status: res.status })
      })
      .catch((err) => console.error(err))
  }, [data.status])

  return (
    <div className="record">
      <h2>{data.name}</h2>
      <span className={`dot ${data.status == 200 ? "ok" : ""}`}></span>
    </div>
  )
}

const getName = (url) => {
  let host = new URL(url).host.split(".")
  let name = host.length == 3 ? host[1] : host[0]
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export default Record
