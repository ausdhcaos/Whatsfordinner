import './App.css';
import React from 'react'
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import HomeImage from './pages/HomeImage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Resturants from "./pages/Resturants";
import RestLogin from "./pages/RestLogin";
import RestSignup from "./pages/RestSignup";
import Contactus from"./pages/Contactus";
import FirstRestExample from "./pages/FirstRestExample";



function App() {
  return (
    <Router>
       <div className='App'>
        <Navbar /> 
             <Switch>
                <Route path="/login" > <Login /> </Route>
                <Route path="/Register" > <Register /> </Route>
                <Route path="/Contactus" > <Contactus /> </Route>
                <Route exact path="/RestLogin" component={RestLogin} />
                <Route exact path="/RestSignup" component={RestSignup} />
                 <Route exact path="/FirstRestExample" component={FirstRestExample} />

                <Route path="/resturants" > <Resturants /> </Route>

                <Route  path="/"> <HomeImage /> </Route>
            </Switch>
        <Footer />


         </div>

    </Router>

     
  );
}

export default App
 