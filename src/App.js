import React ,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './charts';
import Middle from './lay';
import Info from './info';
import Fade from 'react-reveal/Fade';
import {
    Route,Link,BrowserRouter as Router
  } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import About from './components/about'

import AntDesign from './components/animation'


function App() {
  return (

    <div className="App">
    <About/>
    <br/><br/>
    <Middle />
    <br/><br/>
    
    <Info />
    

    <br/><br/>
    <div class="display-4">AND REACT&nbsp;<span style={{color: "red"}}>&hearts;</span></div>
     

    
      	
      
    </div>
  );
}

const styles = {
 
};

export default App;
