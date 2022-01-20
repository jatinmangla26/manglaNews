import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import  { NavBar } from './Components/NavBar';
import News from './Components/News';


export default class App extends Component {
  render() {
    return (
      <div>
       <Router>
        <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<News pageSize={5} country="in" category="general"/>}></Route>
        <Route path="/buisness" element={<News pageSize={5} country="in" category="buisness"/>}></Route>
        <Route path="/entertainment" element={<News pageSize={5} country="in" category="entertainment"/>}></Route>
        <Route path="/general" element={<News pageSize={5} country="in" category="general"/>}></Route>
        <Route path="/health" element={<News pageSize={5} country="in" category="health"/>}></Route>
        <Route path="/science" element={<News pageSize={5} country="in" category="science"/>}></Route>
        <Route path="/sports" element={<News pageSize={5} country="in" category="sports"/>}></Route>
        <Route path="/technology" element={<News pageSize={5} country="in" category="technology"/>}></Route> 
        </Routes>
          
        </Router>
      </div>
    )
  }
}



