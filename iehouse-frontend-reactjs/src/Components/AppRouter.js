import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from './Templates/LoginScreen';
import { RegisterScreen } from './Templates/RegisterScreen';
import { HomeScreen } from './Templates/HomeScreen';
// import { NavBar } from './Organisms/NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <NavBar /> */}
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/register' component={RegisterScreen} />
                </Switch>
            </div>
        </Router>
    )
}
