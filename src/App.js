import React from "react";
import {
  BrowserRouter,Switch,Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Header from "./containers/Header";
import styled from "styled-components";
import About from "./containers/About";
import Home from "./containers/Home";
import Project from "./containers/Project";



function App() {

   return(
     <Container>
     <Header />
<BrowserRouter>
        <Switch>
          <Route exact path="/about" component={withRouter(About)} />


          <Route exact path="/project" component={withRouter(Project)} />


          <Route exact path="/" component={withRouter(Home)} />


        </Switch>

  
      </BrowserRouter>
    </Container>

  );
}

export default App;

const Container = styled.div`

display:grid;
grid-template-rows:64px auto min-content;


`

// const Content = styled.div`


// `

// const Footer = styled.div`
// background:black
// `




