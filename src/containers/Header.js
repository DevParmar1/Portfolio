import React from 'react'
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";


function Header() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Container>
            <Name>
                Dev Parmar
        </Name>
            <Nav>
                

                    <div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/project">Project</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </nav>

                        


                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                       
                    </div>
                
            </Nav>
        </Container>
    )
}

export default Header

const Container = styled.div`
display:flex;
align-items:center;
position:relative;
right:1;
background:orange;

position: fixed;
  top: 0;
  width: 100% ;
 
`
const Name = styled.div`
padding-left:10px;
padding-top:16px;
padding-bottom:16px;

${'' /* @media (min-width: 768px) {
    font-weight:bold;
    font-size:40px;
  } */}
`
const Nav = styled.div`
position:absolute;
right:0;
padding-right:50px;

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display:flex;
}

li{
    display:flex;
    padding-right:32px;
    

    ${'' /* @media (min-width: 768px) {
    font-weight:bold;
    font-size:40px;
  } */}
}

a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}


`




