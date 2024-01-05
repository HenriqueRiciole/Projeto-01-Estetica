import styled from "styled-components"

const StyledButton= styled.button`
  
      background-color: #2fffaf;
      display: flex;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      padding: 15px 20px;
      position: absolute;
    
`
  

const Button=(props)=> {
    return(
        <StyledButton {...props}>{props.children}</StyledButton>
    )
}

export default Button