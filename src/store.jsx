// Copyright (c), Ruslan Sendecky
// All rights reserved
// Use of this source code is governed by the MIT license
// See LICENSE for details

import React, { useState, useContext, createContext } from "react"

const Store = createContext(null)

export const StoreProvider = ({ children }) => {
  const [name, setName] = React.useState("ruslan")

  const store = {
    name: [name, setName],
  }

  return <Store.Provider value={store}>{children}</Store.Provider>
}

export const useStore = (l) => {
  const {
    [l]: [data, setData],
  } = useContext(Store)

  return [data, setData]
}
