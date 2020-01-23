import React from 'react';
import Fade from 'react-reveal/Fade';


import AntDesign from './components/animation';

import {
    Route,Link,BrowserRouter as Router
  } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Middle extends React.Component{
    state = {
        open : '{',
        close: '}',
      }
    
      render() {
        return (
            <div class="container-fluid ">
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-5 text-left shadow p-4 mb-4 bg-white ">
              <div class="font-weight-lighter text-success display-4"><Fade top>CAREER OBJECTIVE</Fade></div><br/>
              <h1 class=" font-weight-lighter">To pursue and excel in growth oriented organization in order to utilize my skills and
                   knowledge for the growth of the organization.</h1>
              </div>
              
              <div class="col-md-6">
                  <Fade right>
          <img class="img-fluid thumbnail" src="http://abhishektadkod.github.io/Resume/public/edu.PNG" alt="img" /> 
          </Fade>
          </div>
          </div>
          </div>
        );
      }
    }
    
  export default Middle;

