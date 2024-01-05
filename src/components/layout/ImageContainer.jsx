import styled from "styled-components"

const StyledImage= styled.div`
    background-image: url('${props=> props.image}');
    background-position:left;
    background-color: transparent;
    width:  100%;
    height: 100vh;
    background-size: cover;
    position: relative;
`

function ImageContainer({image, children}){
    return(
        <>
         <StyledImage image={image}>{children}</StyledImage>
        </>
    )
}

ImageContainer.defaultProps={
    image: '/procedimento-de-cosmetologia-para-rosto.jpg'
}

export default ImageContainer