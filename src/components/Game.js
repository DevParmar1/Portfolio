import React from 'react';
// import page from "../assets/lottie/sleeping.json";
// import DisplayLottie from "./displayLottie/DisplayLottie";

import styled from "styled-components";
import g from "../assets/media/jett.mp4";



function Game() {
    return (
     
            <Container>
            <I>
                    <video src={g} autoPlay loop muted playsInline width="500px"></video>
                </I>
                <Content>
                <h1></h1>
                    <h1>Gaming</h1>
                    <span>Besides Coding, I love to spend time playing games when i just have nothing else to do. Gaming has always been closer to me since childhood and so it helps me to think straight & clear while reducing the stress.</span>
                </Content>
                
            </Container>
        


    )
}

export default Game;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:7rem;
padding-bottom:10rem;

@media (max-width : 768px){
    
padding-top:2rem;
 display:inline-block;
 padding-bottom:5rem;

}

`



const I = styled.div`
flex:1;
margin-left:8rem;

@media(max-width:768px){
    margin:2.5rem auto;
}

video{
    
border-radius:1rem;


@media(max-width:768px){
    display:block;
    width:100%;
   
    height:auto;
    

}
}

`

const Content = styled.div`
flex:1;
text-align:center;
padding-right:8rem;

h1{
    color:#802BB1;
}

span{
 font-size:1.5rem;
 line-height:1.3;  

 @media(max-width:768px){
     font-size:1rem;
 } 
}
@media(max-width:768px){
    
    padding:0;
    display:block;

}
`

