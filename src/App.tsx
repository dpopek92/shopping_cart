import React, {useContext, useEffect} from "react"
import Cart from "Scenes/Cart/Cart"
import Loading from "components/Loading/Loading"
import Error from "components/Error/Error"
import useCartApi from "hooks/useCartApi"
import {CartContext} from "context/CartContext"
import {loadProductsSuccess} from "context/actions"
import "style/index.css"

const App = (): JSX.Element => {
  const {isLoading, isError, data} = useCartApi("/api/cart", [])
  const {dispatch} = useContext(CartContext)

  useEffect(() => {
    if (data) dispatch(loadProductsSuccess(data))
  }, [data])

  if (isLoading) return <Loading />
  if (isError) return <Error />
  return (
    <div className="container">
      <Cart />
    </div>
  )
}

export {App}
