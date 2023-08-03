import styled from "styled-components"
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    color:#fff;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`

const Wrapper = styled.div`
    display:  grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`



export default function Featured() {
    return(
        <Bg>
            <Center>
                <Wrapper>
                    <div>
                            <Title>Pro Anyhere</Title>
                            <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Desc>
                    </div>
                    <div>
                        <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"/>
                    </div>
                </Wrapper>
            </Center>
        </Bg>
    )
}