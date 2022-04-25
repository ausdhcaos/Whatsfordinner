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
import News from "./pages/News";
import TechnicalSupport from "./pages/TechnicalSupport";
import TermsAndConditions from "./pages/TermsAndConditions";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
       <div className='App'>
        <Navbar /> 
             <Switch>
                <Route path="/login" > <Login /> </Route>
                <Route path="/Register" > <Register /> </Route>
                <Route exact path="/RestLogin" component={RestLogin} />
                <Route exact path="/RestSignup" component={RestSignup} />
				<Route path="/resturants" > <Resturants /> </Route>
				<Route path="/news" > <News /> </Route>
				<Route path="/technicalSupport" > <TechnicalSupport /> </Route>
				<Route path="/termsAndConditions" > <TermsAndConditions /> </Route>
				<Route path="/aboutUs" > <AboutUs /> </Route>
                <Route path="/"> <HomeImage /> </Route>
            </Switch>
        <Footer />
			<Switch>
            </Switch>
         </div>

    </Router>

     
  );
}

export default App
 