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
        <InputGroup>
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

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Home />
        </div>
        <div>
        <Battle />
        </div>
      </div>
    );
  }
}

export default App;
