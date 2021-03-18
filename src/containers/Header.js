import React from 'react'
import { createBrowserHistory } from 'history';
import styled from "styled-components";




function Header() {
    
    var history = createBrowserHistory({
        forceRefresh: true
       });
     
      const routeChange1 = () =>{ 
        console.log("yes clicked");
    
      history.push("/");
      }
      
      const routeChange2 = () =>{ 
        console.log("yes clicked");
        
        
        history.push("/projects");
      }
      
      const routeChange3 = () =>{ 
        console.log("yes clicked");
         
        
        history.push("/about");
      }
    
     
    
     
    return(
     
        
    
      
          <HeaderContainer>
          <Name>
              Dev Parmar
      </Name>
          <Nav>
              
    
                  <div>
                      <nav>
                          <ul>
                              <li onClick={routeChange1}>Home</li>
                              <li onClick={routeChange2}>Projects</li>
                              <li onClick={routeChange3}>About</li>
                          </ul>
                      </nav>
    
                      
    
    
                      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
                     
                  </div>
              
          </Nav>
      </HeaderContainer>
    );

    }
export default Header;

const HeaderContainer = styled.div`
display:flex;
align-items:center;
position:relative;
right:1;
background:orange;

position: fixed;
top: ;
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
  cursor:pointer;

  :hover{
      color:white;
  }

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