import {ProductI} from "utils/types"
import {
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_SUCCESS,
  SET_PRODUCT_QTY
} from "./reducer"
import {LoadProductsErrorI, LoadProductsSuccessI, SetProductQtyI} from "./types"

export const loadProductsSuccess = (
  cart: ProductI[]
): LoadProductsSuccessI => ({
  type: LOAD_PRODUCTS_SUCCESS,
  cart
})

export const loadProductsError = (): LoadProductsErrorI => ({
  type: LOAD_PRODUCTS_ERROR
})
export const setProductQty = (
  index: number,
  quantity: number
): SetProductQtyI => ({
  type: SET_PRODUCT_QTY,
  index,
  quantity
})
