import React from 'react';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
import AntDesign from './animation'

import {
    Route,Link,BrowserRouter as Router
  } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class About extends React.Component{
    state = {
        open : '{',
        close: '}',
      }
    
      render() {
        return (
          <div class="container-fluid">
              <div class="row">
                <div class="col-md-5" style={{padding: "70px"}}>
                
                <img class="img-fluid rounded border border-white" src="http://abhishektadkod.github.io/Resume/public/abhishek.png" alt="img" width="260" height="100"/> 

                </div>
                <div class="col-md-6">
                
                <div class="display-4"><LightSpeed left>ABHISHEK TADKOD    </LightSpeed></div>
    
                <br/><br/>
                <h4 class="shadow p-4 mb-4 bg-white text-dark text-left 	"><Fade bottom>
                
                Mobile: +91-9148301122<br/>
                Email ID: <a href="#">abhishektadkod@gmail.com</a><br/>
                Linkedin: <a href="https://linkedin.com/in/abhishek-tadkod">https://www.linkedin.com/in/abhishek-tadkod137127176/</a><br/>
                GitHub: <a href="https://github.com/abhishektadkod/">https://github.com/abhishektadkod/</a><br/>
                
             </Fade>
             </h4>
                
              </div>
              </div>
              
              <div class="container-fluid text-success">
          <div class="row">
            <div class="col-md-4">
           
         	
           </div>
				<div class="col-md-8">
        
          
             
          </div>
          
        </div>
        </div>
          </div>
        );
      }
    }
    
  export default About;

