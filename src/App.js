import './App.css';
import React from 'react'
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import Resturants from './pages/Resturants.js';
import HomeImage from './pages/HomeImage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './pages/Login';

function App() {
  return (
    <Router>
       <div className='App'>
        <Navbar /> 
        
        <Switch>
            <Route path="/login" > <Login /> </Route>
             <Route  path="/"> <HomeImage /> </Route>
             <Route path="/resturants" > <Resturants /> </Route> 
             
          
            
        </Switch>
     
       <Footer />
      </div>
    </Router>
     
  );
}

export default App
 