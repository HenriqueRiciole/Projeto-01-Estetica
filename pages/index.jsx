import styled from "styled-components"

import Title from "../src/components/Title/Title"
import Navbar from "../src/components/layout/navbar"
import Button from "../src/components/inputs/Button"
import ImageContainer from "../src/components/layout/ImageContainer"

const PageContainer= styled.div`
  width: 100%;
  height: 100vh;
`



export default function HomePage() {
    return(
        <div>
            <PageContainer>
              <Navbar/>
              <ImageContainer>
                <Title>Título do site!</Title>
                <Button>Entrar</Button>
              </ImageContainer> 
            </PageContainer>
        </div>
    )
}