import React from 'react'
import { createBrowserHistory } from 'history';
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Headroom from 'react-headroom';
import "./Header.css";
import "../assets/fonts/Agustina.woff";
import "../assets/fonts/Montserrat-Regular.ttf";
import '../assets/fonts/Agustina.otf';

function Header() {



  var history = createBrowserHistory({
    forceRefresh: true
  });

  const routeChange1 = () => {
    console.log("yes clicked");

    history.push("/");
  }

  const routeChange2 = () => {
    console.log("yes clicked");


    history.push("/project");
  }

  const routeChange3 = () => {
    console.log("yes clicked");


    history.push("/about");
  }


  const isMobile = useMediaQuery({
    query: '(max-device-width: 768px)'
  })

  return (



    <Headroom>


      {isMobile
        ?
        <header className="header">
          <a href="/" className="logo">
            
            <span className="logo-name">Dev Parmar</span>
            
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{ color: "white" }}
          >
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li onClick={routeChange1}>Home</li>
            <li onClick={routeChange2}>Project</li>
            <li onClick={routeChange3}>About</li>
          </ul>
        </header>
        :
        <HeaderContainer>
          <Name>

            Dev Parmar
      </Name>
          <Nav>


            <div>
              <nav>
                <ul>
                  <li onClick={routeChange1}>Home</li>
                  <li onClick={routeChange2}>Project</li>
                  <li onClick={routeChange3}>About</li>
                </ul>
              </nav>




              {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

            </div>

          </Nav>
        </HeaderContainer>
      }


    </Headroom>

  );

}
export default Header;

const HeaderContainer = styled.div`
display:flex;
align-items:center;
position:relative;
right:1;
background:#fff;



${'' /* position: fixed;
z-index:99;
top: ;*/}
width: 100% ; 

`
const Name = styled.div`

padding-left:0.7rem;
padding-top:1.5rem;
padding-bottom:1rem;
font-family: "Agustina Regular";
    font-weight: bold;
    font-variant-ligatures: no-common-ligatures;
    -webkit-font-variant-ligatures: no-common-ligatures;
  

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
  font-family: 'Permanent Marker', cursive;
    
    font-variant-ligatures: no-common-ligatures;
    -webkit-font-variant-ligatures: no-common-ligatures;

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