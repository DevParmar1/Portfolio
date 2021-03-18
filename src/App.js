import React from "react";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Project from "./containers/Project";
import Header from "./containers/Header";

function App() {
  return (
    <Container>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/about" component={About} />


          <Route exact path="/project" component={Project} />


          <Route exact path="/" component={Home} />


        </Switch>

  
      </Router>
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
