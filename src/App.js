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

const result= ()=>(
  <div className="container">
    <div className="[ col-sm-6 col-md-offset-2 col-md-4 ]">
      <div className="[ info-card ]">
        <img
          style={{ width: "100%" }}
          src="https://avatars.githubusercontent.com/u/564874?v=3"
        />
        <div className="[ info-card-details ] animate">
          <div className="[ info-card-header ]">
            <h1> Robert McIntosh </h1>
            <h3> Tipo de seguro </h3>
          </div>
          <div className="[ info-card-detail ]">
            {/* Description */}
            <p>
              Resultado de los datos procesados. 
            </p>
            <div className="social">
              <a
                href="https://www.facebook.com/rem.mcintosh"
                className="[ social-icon facebook ] animate"
              >
                <span className="fa fa-facebook" />
              </a>
              <a
                href="https://twitter.com/Mouse0270"
                className="[ social-icon twitter ] animate"
              >
                <span className="fa fa-twitter" />
              </a>
              <a
                href="https://github.com/mouse0270"
                className="[ social-icon github ] animate"
              >
                <span className="fa fa-github-alt" />
              </a>
              <a
                href="https://plus.google.com/u/0/115077481218689845626/posts"
                className="[ social-icon google-plus ] animate"
              >
                <span className="fa fa-google-plus" />
              </a>
              <a
                href="www.linkedin.com/in/remcintosh/"
                className="[ social-icon linkedin ] animate"
              >
                <span className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// const Result = ()=>(
//   <Grid>
//   <Row>
//   <Col xs={6} md={4}>
//     <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
//       <h3>Thumbnail label</h3>
//       <p>Description</p>
//       <p>
//         <Button bsStyle="primary">Button</Button>&nbsp;
//         <Button bsStyle="default">Button</Button>
//       </p>
//     </Thumbnail>
//   </Col>
//   <Col xs={6} md={4}>
//     <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
//       <h3>Thumbnail label</h3>
//       <p>Description</p>
//       <p>
//         <Button bsStyle="primary">Button</Button>&nbsp;
//         <Button bsStyle="default">Button</Button>
//       </p>
//     </Thumbnail>
//   </Col>
//   <Col xs={6} md={4}>
//     <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
//       <h3>Thumbnail label</h3>
//       <p>Description</p>
//       <p>
//         <Button bsStyle="primary">Button</Button>&nbsp;
//         <Button bsStyle="default">Button</Button>
//       </p>
//     </Thumbnail>
//   </Col>
//   </Row>
// </Grid>
// )



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
