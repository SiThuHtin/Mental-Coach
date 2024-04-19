import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router } from "react-router-dom"
import Navbar from './components/Navbar'



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Router>
  <Navbar/>
  <App />
  </Router>
    
  //</React.StrictMode>
)
