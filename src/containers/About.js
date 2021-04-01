import React from 'react';
import styled from "styled-components";
import Profile from "../components/Profile";
import Anime from "../components/Anime";
import Game from "../components/Game";


function About() {
    return (


        <Container>



            <Content>

                <Profile />
                <Anime />
                <Game />

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


