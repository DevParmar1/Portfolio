import React from 'react';
import styled from "styled-components";
import skillSection from "../containers/PortfolioData";

function SkillCard() {
    return (
        <Container>
        <SkillHeading>
            <h1>
                What do i do?
            </h1>
            
        </SkillHeading>
        <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
        
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
               <a href={skills.href}><i className={skills.fontAwesomeClassname}></i></a> 
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
margin-left:1.5rem;

p{
  font-size:1.5rem;
  line-height:1;

  @media(max-width:768px){
  font-size:1rem;
  line-height:1.5;
  text-align:center;
}
}

@media(max-width:768px){
  margin:0 auto;
}
`

const SkillHeading = styled.div `
display:flex;
justify-content:center;
flex-direction:rows;
color:#F2F2F2;
`

const Icons = styled.div`
display:inline-block;



li{
    list-style:none;
   
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: center;
  @media (max-width: 768px){
   ${'' /* padding-right:0.5rem; */}

  }

  i{
    font-size: 3rem;
    @media (max-width: 768px){
      font-size:1.5rem;
      display:inline-block;
    }
  }
    
}


:hover{
    color:red;
}
`

