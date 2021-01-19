import {ProductI} from "utils/types"

export const formatPrice = (price: string) => `${price} zł/szt.`

export const getCartProductPrice = (price: string, qty?: number) => {
  if (!isPriceValid(price) || !qty) return "Err!"
  const priceNumber = parseFloat(price)
  const productPrice = priceNumber * qty

  return productPrice.toFixed(2)
}

export const isValueNumber = (value: string) => {
  const reg = /^[0-9]+$/
  const result = reg.test(value)

  return result
}

const isPriceValid = (price: string) => {
  const reg = /(\d+\.\d{1,2})/
  const result = reg.test(price)

  return result
}

export const getCartPrice = (cart: ProductI[]) => {
  const price = cart
    .map((product: ProductI) => {
      const productPrice = parseFloat(product.price)
      return productPrice * product.quantity
    })
    .reduce((price: number, productPrice: number) => {
      const newPrice = price + productPrice
      return newPrice
    }, 0)
  const cartPrice = price.toFixed(2)

  return `${cartPrice} zł`
}
