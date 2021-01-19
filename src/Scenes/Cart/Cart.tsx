import Header from "components/Header/Header"
import {CartContext} from "context/CartContext"
import React, {useContext, useEffect, useState} from "react"
import styled from "styled-components"
import {getCartPrice} from "utils/helpers"
import {ProductI} from "utils/types"
import Product from "./components/Product"

const CartPrice = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: right;
  margin-top: 20px;
`

const ProductsList: React.FC = () => {
  const {
    state: {cart}
  } = useContext(CartContext)
  const [cartPrice, setCartPrice] = useState("-")

  useEffect(() => {
    if (cart.length) {
      const price = getCartPrice(cart)
      setCartPrice(price)
    }
  }, [cart])

  return (
    <div>
      <Header>Lista produktów</Header>
      {cart.map((product: ProductI, index: number) => (
        <Product key={product.pid} product={product} index={index} />
      ))}
      <CartPrice>Cena koszyka: {cartPrice}</CartPrice>
    </div>
  )
}

export default ProductsList
