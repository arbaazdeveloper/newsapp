//import logo from './logo.';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar linkName={"nav-link"}/>

      <Switch>
      <Route path="/technology">
          <News key="technology" pageSize={3} category="technology"/>
           
          </Route>
      
          <Route exact path="/sports">
          <News key="sports" pageSize={3} category="sports"/>
          </Route>

          <Route path="/science">
      <News key="science" pageSize={3} category="science"/>
           
          </Route>
          <Route path="/health">
      <News key="health" pageSize={3} category="health"/>
           
          </Route>
          <Route path="/entertainment">
      <News key="entertainment" pageSize={3} category="entertainment"/>
           
          </Route>
          <Route path="/business">
      <News key="business" pageSize={3} category="business"/>
           
          </Route>

         

          <Route exact path="/">
          <News key="general" pageSize={10} category="general"/>
          </Route>
        </Switch>
      </Router>

        
      </div>
    )
  }
}

