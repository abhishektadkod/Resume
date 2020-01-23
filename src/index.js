import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    Route,Link,BrowserRouter as Router
  } from "react-router-dom";
import * as serviceWorker from './serviceWorker';


const routing = (

    <Router>
     
    <div>
      {/* <div class="btn btn-default btn-lg" >
      <Link to='/'>Home</Link>
      </div> */}
      <Route exact path="/" component={App}/><br/>
      
      
      {/* <Route path="/login" component={Front}/><br/>
      <Link to='/login'>Sign Up!</Link>
      <Route path="/custom" component={Custom}/><br/>
      <Link to='/custom'>Custom</Link>
      <Route path="/dash" component={Dash}/><br/>
      <Link to='/dash'>Dashboard</Link>
      <Route path="/login" component={Front}/> */}
      
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
