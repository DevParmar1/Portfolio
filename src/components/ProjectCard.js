import React from 'react';
import styled from "styled-components";

import {projectSection} from "../containers/PortfolioData";

function ProjectCard() {
    return (
        <Container>

            {projectSection.Data.map((project,i)=>{
                return(
                    <Card>
                <ProjectTitle>
                    <h1>{project.name}</h1>
                </ProjectTitle>
                <ProjectDesc>
                    <p>{project.desc}</p>
                </ProjectDesc>
                <Icons>
                  <ul>
                  <li
                key={i}
                name={project.name}
                
              >
                <a href={project.link} title={project.name}> <i className={project.class} />  </a>
               
              </li>
                  </ul>
                  </Icons>
                
           </Card>

                );
            })}
            

        </Container>
    )
}

export default ProjectCard;

const Container = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem auto 4rem;
  max-width: 90%;
  
  @media (max-width: 768px){
  margin:auto 0;

  }
`

const Card = styled.div`
 flex:1 0 21%;
 text-align: center;
  max-width: 20rem;
  margin-bottom: 3rem;
  padding: 0 2rem 2rem;
  border-radius: 3px;
  border: solid 2px #fff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
  background-color: pink;
  transition: all 100ms ease-in-out;
@media (max-width: 768px){
  margin-left:0.2rem;
  padding-right:2.4rem;
  
  
  }

`
const ProjectTitle = styled.div`

h1 {
    display: inline-block;
    border-bottom: .3rem solid black;
    padding-bottom:1rem;
    ${'' /* transform: translateY(-1rem); */}
   
}
  margin:2rem auto;
  
  display: block;
  font-size: 1.5rem;
  @media (max-width:768px){
   font-size:200%;
}
`
const ProjectDesc = styled.div`
 font-size: 90%;
  margin: 1rem auto 0 auto;
  padding-top:4.5rem;
  letter-spacing: 0.33px;
  max-width: 15rem;
`
// const ProjectLink = styled.div`
//   margin-top: 1rem;
//   margin-bottom: 0.25rem;
//   font-weight: 600;
//   font-size: inherit;
// `

const Icons = styled.div`
display:inline-block;
margin:0 auto;

ul{
    padding:0;
    li{
    list-style:none;
   
  @media (max-width: 768px){
      padding-left:40px;
  }


  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
      cursor:pointer;
 }

  i{
    font-size: 3rem;

    @media (max-width:768px){
        font-size:2rem;
        display:flex;
        flex-wrap:block;
        padding-right:2.5rem;
    }
  }
    
}
}



:hover{
    color:red;
    -webkit-animation: fa-spin 1s infinite linear;
  -moz-animation: fa-spin 1s infinite linear;
  -o-animation: fa-spin 1s infinite linear;
  animation: fa-spin 1s infinite linear;
}


`