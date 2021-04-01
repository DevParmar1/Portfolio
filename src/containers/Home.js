import React from "react";
import styled from "styled-components";

import Greeting from "./Greeting";
import Skill from "./Skill";
import Contact from "./Contact";

function Home() {
    return (
        <Container>
            

            <Content>

                <Greeting />
                <Skill />
                <Contact />

            </Content>

            

        </Container>
    );
}

export default Home;

const Container = styled.div`
background:#116466;
${'' /* display:grid;
grid-template-rows:64px auto min-content; */}


`

const Content = styled.div`


`

// const Footer = styled.div`
// background:black
// `
