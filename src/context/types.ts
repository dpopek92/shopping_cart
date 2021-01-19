import {ProductI} from "utils/types"
import {
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_SUCCESS,
  SET_PRODUCT_QTY
} from "./reducer"

export interface LoadProductsSuccessI {
  type: typeof LOAD_PRODUCTS_SUCCESS
  cart: ProductI[]
}
export interface LoadProductsErrorI {
  type: typeof LOAD_PRODUCTS_ERROR
}
export interface SetProductQtyI {
  type: typeof SET_PRODUCT_QTY
  index: number
  quantity: number
}

export type ActionTypesT =
  | LoadProductsSuccessI
  | LoadProductsErrorI
  | SetProductQtyI
