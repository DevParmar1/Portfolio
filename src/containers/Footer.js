import React from 'react'
import styled from "styled-components";

function Footer() {
    const coded="< />";
    return (
       <Container>
 <h1>
     {coded} by Dev Parmar
     </h1>
       </Container>
    
      
     
    

    
    )
}

export default Footer;

const Container=styled.div`
background:#0B0C10;
h1{
    margin:0 auto;
    font-size:1.5rem;
    color:#66FCF1;

   
}

display:flex;

width:auto;
height:min-content;
align-items:center;
padding:2rem  1rem;


`
