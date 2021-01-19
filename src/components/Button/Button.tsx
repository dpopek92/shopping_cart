import styled from "styled-components"

const Button = styled.button`
  margin: 0;
  height: 35px;
  width: 35px;
  background-color: black;
  color: white;
  border: none;
  font-size: 25px;
  cursor: pointer;
  &:disabled {
    cursor: default;
    background-color: #555555;
  }
`

export default Button
