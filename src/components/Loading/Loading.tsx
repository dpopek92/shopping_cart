import React from "react"
import styled from "styled-components"

const LoadingText = styled.h2`
  text-align: center;
`

const Loading = () => {
  return (
    <div className="container">
      <LoadingText>Loading...</LoadingText>
    </div>
  )
}

export default Loading
