import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <Routes>
        <Route exact path ="/Home" component = {Home}/>
        <Route exact path ="/AboutMe" component = {AboutMe}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
