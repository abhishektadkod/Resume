
import React from 'react';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Chart from './charts';
import AntDesign from './components/animation';


import {
    Route,Link,BrowserRouter as Router
  } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Info extends React.Component{
    state = {
        open : '{',
        close: '}',
      }
    
      render() {
        return (
            <div class="container-fluid font-weight-lighter">
            <div class="row">
              <div class="col-md-5">
                  
<div class="shadow-sm p-4 mb-4 bg-white text-left">  <span class="font text-weight-lighter display-4 ">
 Interned at Scalebyte, Belgaum in Big Data Analytics.</span><br></br><br/>
  <h4>
  <h3 class="btn btn-light">Scalebyte, Belgaum</h3><br/>
  <Rotate bottom left>
  Exposed to distributed computing using Hadoop Framework and learned Programming languages(HIVE and PIG) which manage large datasets.
  <br/><span class="text-muted">Contact Person - Viresh Dagade
  <br/>Contact number- +91-8951403659</span></Rotate></h4>
  </div>


<div class="shadow-sm p-4 mb-4 bg-white text-left"><span class="font text-weight-lighter display-4 ">
  Webapp for farmers to sell organic products</span><br/><br/>
  <h4><h3 class="btn btn-light">Krishiyog, ​Bengaluru </h3><br/>
  <Rotate bottom left>The main focus of this project is to develop a platform for buying and selling Natural Organic food products. We developed a prototype WebApp by learning and implementing Backend Web Languages(PHP, AJAX) and Frontend languages(HTML5, CSS3, Bootstrap4).
  </Rotate>
  </h4>
  </div>


  <div class="shadow-sm p-4 mb-4 bg-white text-left"><span class="font text-weight-lighter display-4 ">
  Hobby Project</span><br/><br/>
  <h4>
  <Rotate bottom left>Designed an Expense Tracker
  WebApp which uses a database to keep track of user’s expenses on a monthly basis.<br/>
  </Rotate> Github:<br/><a href="https://github.com/abhishektadkod/ExpenseTracker">https://github.com/abhishektadkod/ExpenseTracker</a>

      </h4>
  </div>    
  
               
             </div>
                  <div class="col-md-7">
           <Chart/><br/>
           <Fade left>
           <img class="img-fluid " src="http://abhishektadkod.github.io/Resume/public/tech.PNG" alt="img" /> 
           </Fade><br/><br/>
           <Fade left>
           <img class="img-fluid " src="http://abhishektadkod.github.io/Resume/public/achive.PNG" alt="img" /> 
           </Fade>
           {/* <AntDesign/> */}
            </div>
            
          </div>
          </div> 


        );
      }
    }
    
  export default Info;

