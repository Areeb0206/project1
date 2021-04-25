import React from 'react';

import './App.css';

import { Nav } from './layout';

import {Home ,About} from './spa';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 


export default function App() {
  return (

  

 
    <Router>
   
      <Nav />
      <Switch>
       

        <Route path="/about">
            <About />
          </Route>
       
          
           <Route path="/">
            <Home />
          </Route>
     </Switch>
     </Router>







  );
}


