import styled from "styled-components"

const Input = styled.input`
  margin: 0;
  width: 90px;
  padding: 0;
  font-size: 24px;
  line-height: 100%;
  border: none;
  text-align: center;
  &:focus {
    outline: none;
    border: none;
    padding-bottom: 1px;
    border-bottom: 2px solid black;
  }
  &:disabled {
    cursor: default;
    border: 3px solid #e4e4e4;
    background-color: #e4e4e4;
  }
`

export default Input
