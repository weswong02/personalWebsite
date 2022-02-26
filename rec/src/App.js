import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
    return (
      <Router>
        <div className="App" id="outer-container">
          <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
          <Routes>
            <Route path='/' exact />
          </Routes>
          <div id="page-wrap">
            
          </div>
        </div>
      </Router>
    );
  }


export default App;
