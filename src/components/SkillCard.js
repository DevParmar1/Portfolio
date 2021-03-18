import React from 'react';
import styled from "styled-components";
import skillSection from "../containers/PortfolioData";

function SkillCard() {
    return (
        <Container>
        <SkillHeading>
            <h1>
                Skills
            </h1>
        </SkillHeading>
        
        
        {
            skillSection.softwareSkills.map((skills,i)=>{
                return (
                  <Icons>
                  <ul>
                  <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
                  </ul>
                  </Icons>
                   
              
            );
                
            })
        }
        

       
        

       
        </Container>
    )
}

export default SkillCard;

const Container = styled.div`
flex:1;

`

const SkillHeading = styled.div `
display:flex;
justify-content:center;
`

const Icons = styled.div`
display:inline-block;



li{
    list-style:none;
   
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: center;

  i{
    font-size: 3rem;
  }
    
}


:hover{
    color:red;
}
`

