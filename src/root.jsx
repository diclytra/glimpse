/* Ruslan Sendecky <ruslan.sendecky@nab.com.au> */
/************************************************/

import { Route, Routes } from "react-router-dom"
import Home from "./home.jsx"

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Root
