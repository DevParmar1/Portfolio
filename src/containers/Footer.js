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
h1{
    margin:0 auto;
    font-size:1.5rem;
    
}

display:flex;

width:auto;
height:min-content;
align-items:center;
padding:1rem  1rem;
`
