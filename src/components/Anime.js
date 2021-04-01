import React from 'react';
// import page from "../assets/lottie/sleeping.json";
// import DisplayLottie from "./displayLottie/DisplayLottie";
import { Fade } from "react-reveal";
import styled from "styled-components";
import g from "../assets/media/onepiece.mp4";



function Anime() {
    return (
        <Fade>
        <Text>
        <h1>What do i like to do besides coding?</h1>
        
        </Text>
       
            <Container>
               

            



                <Content>
                <h1></h1>
                    <h1>Anime</h1>
                    <span>I like watching Anime in my spare time as its the best way for me to refresh my mind, To me watching anime not only gives me good vibes but also opens up my mind through the message every character of the anime represents</span>
                </Content>
                <I>
                    <video src={g} autoPlay loop muted playsInline width="500px"></video>
                </I>
            </Container>
        </Fade>


    )
}

export default Anime;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:7rem;
padding-bottom:10rem;


@media (max-width : 768px){
    
padding-top:2rem;
 display:block;
padding-bottom:2rem;
}

`


const Text = styled.div`

display:flex;
justify-content:center;



h1{
    @media (max-width:768px){
    display:block;
    font-size:1.5rem;
    text-align:center;
}
}

`

const I = styled.div`
flex:1;
margin-left:8rem;

@media(max-width:768px){
    margin:2.5rem auto;
}

video{
    



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
padding-left:8rem;

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
