import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Line } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import { Pie  } from "react-chartjs-2";

import {
    Route,Link,BrowserRouter as Router
  } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Chart extends React.Component{
    
  
  
   
      render(){
          return(
  
            <div class="">
           
             
                      <h1 className="text-center my-2">Proficiency in different Programming Languages</h1>
                      <PolarChartsPage></PolarChartsPage>
  
        
              </div>
          );
      }
  }
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // Polar chart
  
    class PolarChartsPage extends React.Component {
      state = {
        dataPolar: {
          datasets: [
            {
              label: 'My First dataset',
              data: [2,1,5,1,4],
              backgroundColor: [
                "rgba(247, 70, 74, 0.5)",
                "rgba(70, 191, 189, 0.5)",
                "rgba(253, 180, 92, 0.5)",
                "rgba(148, 159, 177, 0.5)",
                "rgba(77, 83, 96, 0.5)"
              ],
               // for legend
            }
          ],
          labels: ["C", "C++", "Python", "Java", "Javascript"]
        }
      }
    
      render() {
        return (
          <div>
            <Pie  data={this.state.dataPolar} options={{ responsive: true }} onElementsClick={elems => {
  
    console.log(this.state.dataPolar.labels[elems[0]._index]);
    window.location = "/";}
    }/>
          </div>
        );
      }
    }
    
  export default Chart;

