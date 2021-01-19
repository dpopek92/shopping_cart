import React, {useCallback, useContext} from "react"
import styled from "styled-components"
import {ProductI} from "utils/types"
import {formatPrice, getCartProductPrice, isValueNumber} from "utils/helpers"
import ProductQty from "./ProductQty"
import {productQtyCheck} from "utils/apiCalls"
import debounce from "awesome-debounce-promise"
import {CartContext} from "context/CartContext"
import {setProductQty} from "context/actions"

const Wrapper = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid darkgray;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`
const ProductName = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
`
const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 14px;
`
const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  margin-top: 5px;
  letter-spacing: 1px;
`

interface PropsI {
  product: ProductI
  index: number
}

const debounceCheck = debounce(productQtyCheck, 500)

const Product: React.FC<PropsI> = ({product, index}) => {
  const {name, price, min, max, isBlocked, pid, quantity} = product
  const {dispatch} = useContext(CartContext)

  const handleAdd = useCallback(
    () => (quantity ? dispatch(setProductQty(index, quantity + 1)) : null),
    [quantity]
  )
  const hadnleSubstract = useCallback(
    () => (quantity ? dispatch(setProductQty(index, quantity - 1)) : null),
    [quantity]
  )

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: {value}
    } = e
    if (!isValueNumber(value)) return
    const number = parseInt(value)

    dispatch(setProductQty(index, number))

    const res = await debounceCheck(pid, number)
    if (res.status !== 200) dispatch(setProductQty(index, min))
  }

  return (
    <Wrapper>
      <div>
        <ProductName>{name}</ProductName>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      </div>
      <div>
        <ProductQty
          min={min}
          max={max}
          quantity={quantity}
          isBlocked={isBlocked}
          handleAdd={handleAdd}
          handleSubstract={hadnleSubstract}
          handleInput={handleInput}
        />
        <Price>{getCartProductPrice(price, quantity)}zł</Price>
      </div>
    </Wrapper>
  )
}

export default Product
