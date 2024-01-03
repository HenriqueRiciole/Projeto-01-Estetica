import styled from "styled-components"

const StyleTitle= styled.h1`
    font-weight: bold;
    font-size: 60px;
`

export default function Title(props){
  return<StyleTitle>{props.children}</StyleTitle>
}