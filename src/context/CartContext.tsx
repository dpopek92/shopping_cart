import React, {useReducer, createContext} from "react"
import {ProductI} from "utils/types"
import {cartReducer} from "./reducer"
import {ActionTypesT} from "./types"

type InitStateT = {cart: ProductI[]}

const initState = {cart: []}

const CartContext = createContext<{
  state: InitStateT
  dispatch: React.Dispatch<ActionTypesT>
}>({
  state: initState,
  dispatch: () => null
})

const CartContextProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initState)

  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext, CartContextProvider, InitStateT}
