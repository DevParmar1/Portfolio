import React from 'react';
import styled from "styled-components";
import Profile from "../components/Profile";
import Anime from "../components/Anime";
import Game from "../components/Game";
import {Fade, Slide} from "react-reveal";

function About() {
    return (


<Container>



<Content>
<Slide top duration={1000} distance="400px">
    <Profile />
    </Slide>

    <Fade left duration={1500} distance="700px">
    <Anime />
    </Fade>
    
    <Fade right duration={1500} distance="700px">
    <Game />
</Fade>
</Content>





</Container>

      


    )
}

export default About;

const Container = styled.div`

background-color:#19181A;
color:#D1D7E0;
h1{
   
}


`

const Content = styled.div`



`


