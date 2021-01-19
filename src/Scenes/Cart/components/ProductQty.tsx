import Button from "components/Button/Button"
import Input from "components/Input/Input"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 30px !important;
`

interface PropsT {
  quantity?: number
  min: number
  max: number
  isBlocked?: boolean
  handleAdd: () => void
  handleSubstract: () => void
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ProductQty: React.FC<PropsT> = ({
  quantity,
  min,
  max,
  isBlocked,
  handleAdd,
  handleSubstract,
  handleInput
}) => {
  return (
    <Wrapper>
      <Button
        disabled={isBlocked || !quantity || quantity <= min}
        onClick={handleSubstract}
      >
        -
      </Button>
      <Input disabled={isBlocked} value={quantity} onChange={handleInput} />
      <Button
        disabled={isBlocked || !quantity || quantity >= max}
        onClick={handleAdd}
      >
        +
      </Button>
    </Wrapper>
  )
}

export default ProductQty
