import React from 'react'
import styled from "styled-components";
import DisplayLottie from "./displayLottie/DisplayLottie";
import page from "../assets/lottie/sleeping.json";


function AboutCard() {
    return (
        <Container>
            <Animation>
                <DisplayLottie animationData={page} />
            </Animation>

            <Text>
                <h1>About</h1>
                <span>Hello</span>
            </Text>
        </Container>

    )
}

export default AboutCard;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:80%;
height:auto;
padding-top:4rem;
padding-left:6rem;
${'' /* @media (max-width : 768px){
    display:block;
 
} */}

`
const Animation = styled.div`
flex:1;
width:100%;
height:auto;

`

const Text = styled.div`
flex:1;
text-align:center;

${'' /* h1{
    @media (max-width:768px){
    font-size:100px;
} */}
}

`

