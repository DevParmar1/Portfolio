import React from 'react'
import styled from "styled-components";
import DisplayLottie from "../components/displayLottie/DisplayLottie";
import hello from "../assets/lottie/hello.json";

function Contact() {
    return (
        <Container>
            
          <Animation>
          {/* <DisplayLottie animationData={hello} /> */}
          </Animation>
                
           
            <GreetingText>
            <h1>Hello</h1>
            <span>I'm Dev Parmar, Software Engineer from Google!</span>
            </GreetingText>
         
            
        </Container>

    )
}

export default Contact;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:9rem;

${'' /* @media (max-width : 768px){
    display:block;
 
} */}

`
const Animation = styled.div`
flex:1;
width:100%;
height:auto;


`

const GreetingText = styled.div`
flex:1;
text-align:center;

${'' /* h1{
    @media (max-width:768px){
    font-size:100px;
} */}
}

`