import React from 'react';
import styled from "styled-components";
import DisplayLottie from "../components/displayLottie/DisplayLottie";
import contact from "../assets/lottie/contact.json";
import { useMediaQuery } from "react-responsive";
import {contactSection} from "./PortfolioData";

function Contact() {

    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
      })

      console.log(isMobile);

    return (
        <Container>
            
          {isMobile ? 
          <div>
          <GreetingText>
            <h1>Contact Me!</h1>
            <p><i class="fas fa-phone-alt"></i> +91-910441107</p>
            <p>@devparmar37@gmail.com</p>
            {
            contactSection.ContactData.map((skills,i)=>{
                return (
                  <Icons>
                  <ul>
                  <li
                key={i}
                name={skills.name}
                
              >
                <a href={skills.href} title={skills.name}> <i className={skills.class} /> </a>
               
              </li>
                  </ul>
                  </Icons>
                   
              
            );
                
            })
        }
            </GreetingText>
              <Animation>
          <DisplayLottie animationData={contact} />
          </Animation>
          </div>
          :
          <BigContainer>
          <Animation>
          <DisplayLottie animationData={contact} />
          </Animation>
          <GreetingText>
            <h1>Contact Me!</h1>
            <p><i class="fas fa-phone-alt"></i> +91-910441107</p>
            <p>@devparmar37@gmail.com</p>
            {
            contactSection.ContactData.map((skills,i)=>{
                return (
                  <Icons>
                  <ul>
                  <li
                key={i}
                name={skills.name}
                
              >
                <a href={skills.href} title={skills.name}> <i className={skills.class} />  </a>
               
              </li>
                  </ul>
                  </Icons>
                   
              
            );
                
            })
        }
            </GreetingText>
            
          </BigContainer>
          
          
          }
            
            
          
                
           
            
         
            
        </Container>

    )
}

export default Contact;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:9rem;
padding-left:10rem;
width:80%;

@media (max-width : 768px){
    display:block;
    padding-left:0;
    padding-top:0;
}

`
const Animation = styled.div`
flex:1;
width:100%;
height:auto;

@media (max-width : 768px){
    padding-left:1.9rem;
 
}
`

const GreetingText = styled.div`
flex:1;
text-align:center;
padding-left:6rem;

i{
    :hover{
        color:red;
    }
}

@media (max-width:768px){
  padding-right:1rem;
  top:0;
  padding-bottom:1rem;
    h1{
        font-size:1.5rem;
}

li{
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
      cursor:pointer;
 }
}
}


`

const BigContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:90%;
padding-bottom:9rem;

`

const Icons = styled.div`
display:inline-block;

li{
    list-style:none;
   
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: center;

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

:hover{
    color:red;
    -webkit-animation: fa-spin 1s infinite ;
  -moz-animation: fa-spin 1s infinite ;
  -o-animation: fa-spin 1s infinite ;
  animation: fa-spin 1s infinite;
}


`