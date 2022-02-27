import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';


function App() {
    return (
      <Router>
       <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AboutMe' element={<AboutMe/>}/>
            <Route path='/Resume' element={<Resume/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    );
  }


export default App;
