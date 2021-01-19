import {CartContextProvider} from "context/CartContext"
import React from "react"
import {render} from "react-dom"
import {App} from "./App"

render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById("root")
)
