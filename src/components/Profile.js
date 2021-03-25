import React from 'react';
import styled from "styled-components";
// import page from "../assets/lottie/sleeping.json";
// import DisplayLottie from "./displayLottie/DisplayLottie";
import {Fade} from "react-reveal";
import Me from "../assets/images/Me.jpg"



function Profile() {
    return (
        <Fade>
<Container>
            {/* <Animation>
                <DisplayLottie animationData={page} />
            </Animation>

            <Text>
                <h1>About</h1>
                <span>Hello</span>
            </Text> */}

<I src={Me} alt="Dev" />

            
        </Container>
        </Fade>
        

    )
}

export default Profile;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:auto;
height:auto;
padding-top:4rem;

@media (max-width : 768px){

 
}

`
// const Animation = styled.div`
// flex:1;
// width:100%;
// height:auto;

// `

// const Text = styled.div`
// flex:1;
// text-align:center;

// ${'' /* h1{
//     @media (max-width:768px){
//     font-size:100px;
// } */}
// }

// `

const I=styled.img`

width:20%;
border-radius:60%;

@media(max-width:768px){
    width:50%;
    

}
`