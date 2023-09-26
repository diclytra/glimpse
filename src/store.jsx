// Copyright (c), Ruslan Sendecky
// All rights reserved
// Use of this source code is governed by the MIT license
// See LICENSE for details

import React, { useState, useContext, createContext } from "react"

const Store = createContext(null)

export const StoreProvider = ({ children }) => {
  const [name, setName] = React.useState("ruslan")
  const [reload, setReload] = React.useState(false)

  const store = {
    name: [name, setName],
    reload: [reload, setReload],
  }

  return <Store.Provider value={store}>{children}</Store.Provider>
}

export const useStore = (key) => {
  const {
    [key]: [data, setData],
  } = useContext(Store)

  return [data, setData]
}
