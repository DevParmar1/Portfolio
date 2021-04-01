import React from 'react';
import styled from "styled-components";
import {Fade} from "react-reveal";
import Me from "../assets/images/Me.jpg"



function Profile() {
    return (
        <Fade>
<Container>

<I>
    <img src={Me} alt="Dev" />
</I>

<Content>
<h1>I'm Dev, Currently pursuing B.tech from IIIT Vadodara</h1>
</Content>
            
        </Container>
        </Fade>
        

    )
}

export default Profile;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:10rem;
padding-bottom:10rem;


@media (max-width : 768px){
    
padding-top:2rem;
 display:block;

}

`

const I=styled.div`
flex:1;

img{
    
border-radius:60%;
width:50%;
margin-left:7rem;
@media(max-width:768px){
    width:70%;
    margin:0 auto;
    height:auto;
    display:block;

}
}

`

const Content = styled.div`
flex:1;
text-align:center;
padding-right:8rem;

@media(max-width:768px){
    display:block;
    padding:0;
}
h1{
    line-height:1.3;
    color:#4056A1;
    
    @media(max-width:768px){
    
 
  font-size:2rem;
        text-align:center;
}
}


`