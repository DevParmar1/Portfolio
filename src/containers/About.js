import React from 'react';
import styled from "styled-components";
import Profile from "../components/Profile";
import Anime from "../components/Anime";
import Game from "../components/Game";
import {Fade} from "react-reveal";

function About() {
    return (


<Container>



<Content>
<Fade left duration={1500} distance="700px">
    <Profile />
    </Fade>

    <Fade left duration={1500} distance="700px">
    <Anime />
    </Fade>
    
    <Fade left duration={1500} distance="700px">
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


