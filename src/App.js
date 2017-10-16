import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { InputGroup,
Grid,
Button,
FormControl,
FormGroup,
Form,
Col,
Thumbnail,
Row,
} from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
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

const Result = ()=>(
  <Grid>
  <Row>
  <Col xs={6} md={4}>
    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
      <h3>Thumbnail label</h3>
      <p>Description</p>
      <p>
        <Button bsStyle="primary">Button</Button>&nbsp;
        <Button bsStyle="default">Button</Button>
      </p>
    </Thumbnail>
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
      <h3>Thumbnail label</h3>
      <p>Description</p>
      <p>
        <Button bsStyle="primary">Button</Button>&nbsp;
        <Button bsStyle="default">Button</Button>
      </p>
    </Thumbnail>
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
      <h3>Thumbnail label</h3>
      <p>Description</p>
      <p>
        <Button bsStyle="primary">Button</Button>&nbsp;
        <Button bsStyle="default">Button</Button>
      </p>
    </Thumbnail>
  </Col>
  </Row>
</Grid>
)

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
