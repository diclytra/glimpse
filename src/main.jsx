/* Ruslan Sendecky <ruslan.sendecky@nab.com.au> */
/************************************************/

import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./home.jsx"
import "./main.css"
import { StoreProvider } from "./store.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <Home />
    </StoreProvider>
  </React.StrictMode>
)
