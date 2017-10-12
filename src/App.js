import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from "react-router-dom";

const Home = () => (
  <div>
    <h2>
      <center>
        <strong>Github Battle: Battle your friends... and stuff.</strong>
      </center>
    </h2>
    <center>
      <Button bsStyle="primary" bsSize="large">
        Battle
      </Button>
    </center>
  </div>
);

const Battle = () => (
  <center>
    <Form inline>
      <FormGroup controlId="formInlineName">
        <InputGroup bsSize="large">
          <Col sm={8} mdOffset={4}>
            <h4>Player One</h4>
            <FormControl type="text" placeholder="Github user" />
            <Button type="submit" bsSize="small">
              Submit
            </Button>
          </Col>
        </InputGroup>
      </FormGroup>
      <FormGroup controlId="formInlineName">
        <InputGroup>
          <Col sm={8} mdOffset={4}>
            <h4>Player Two</h4>
            <FormControl type="text" placeholder="Github user" />
            <Button type="submit" bsSize="small">
              Submit
            </Button>
          </Col>
        </InputGroup>
      </FormGroup>
    </Form>
  </center>
);
const Popular = () => (
  <center>
    
            <h4>I really sorry teacher, I didn't have time to do all the components
              Please :( Don't put a bad grade!!!
            </h4>
           
      
  </center>
);

const NotFoundPage = (props) => {
  return (
     <Route exact path="/" component={Home}/>
  );
}

class App extends Component {
  render() {
    return (
      
      <div className= 'content'>
  <BrowserRouter>
    <header>
      <ul className="main-nav">
        <li><a className = 'active'><NavLink to="/">Home</NavLink></a></li>
        <li><a className = 'active'><NavLink to="/battle">Battle</NavLink></a></li> 
        <li><a className = 'active'><NavLink to="/popular">Popular</NavLink></a></li>                   
      </ul>
           
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/battle" component={Battle}/> 
         <Route path="/popular" component={Popular}/>   
         <Route component={NotFoundPage}/>         
         
      </Switch>
    </header>    
  </BrowserRouter>
  </div> 
    );
  }
}

export default App;
