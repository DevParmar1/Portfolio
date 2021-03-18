import React from 'react';
import styled from "styled-components";
import skills from "../assets/lottie/skills.json";
import DisplayLottie from "../components/displayLottie/DisplayLottie";
import SkillCard from "../components/SkillCard";

function Skill() {
    return (
        <Container>
            
          
                
           
            <SkillCard />
         
            <Animation>
          <DisplayLottie animationData={skills} />
          </Animation>
            
        </Container>

    )
}

export default Skill;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:10rem;
padding-bottom:5rem;

${'' /* @media (max-width:768px){
    display:block;
} */}

`
const Animation = styled.div`
flex:1;
width:100%;
height:auto;


`

