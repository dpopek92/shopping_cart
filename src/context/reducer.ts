import update from "immutability-helper"
import {ProductI} from "utils/types"
import {ActionTypesT} from "./types"
import {InitStateT} from "./CartContext"

export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS"
export const LOAD_PRODUCTS_ERROR = "LOAD_PRODUCTS_ERROR"
export const SET_PRODUCT_QTY = "SET_PRODUCT_QTY"

export const cartReducer = (
  state: InitStateT,
  action: ActionTypesT
): InitStateT => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS: {
      // Adding default quantity field on load
      const productsWithQty = action.cart.map((product: ProductI) => ({
        ...product,
        quantity: 1
      }))
      return update(state, {cart: {$set: productsWithQty}})
    }

    case LOAD_PRODUCTS_ERROR: {
      return update(state, {cart: {$set: []}})
    }

    case SET_PRODUCT_QTY: {
      const {index, quantity} = action

      return update(state, {
        cart: {
          [index]: {
            quantity: {$set: quantity}
          }
        }
      })
    }
  }
}
