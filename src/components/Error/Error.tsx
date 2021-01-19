import React from "react"
import styled from "styled-components"

const ErrorText = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: #c01b1b;
`

const Error = () => {
  return (
    <div className="container">
      <ErrorText>Error!</ErrorText>
    </div>
  )
}

export default Error
