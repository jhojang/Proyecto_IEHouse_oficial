import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect
} from "react-router-dom";
import { IndexScreen } from '../Components/Templates/IndexScreen';
import { LoginScreen } from '../Components/Templates/LoginScreen';
import { RegisterScreen } from '../Components/Templates/RegisterScreen';
import { HomeScreen } from '../Components/Templates/HomeScreen';
import { RequireAuth } from '../Helpers/RequireAuth';
import { RemoveAuth } from '../Helpers/RemoveAuth';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={IndexScreen} />
                    <Route path='/home' component={props => <RequireAuth {...props} Component={HomeScreen} />} />
                    <Route path='/login' component={props => <RemoveAuth {...props} Component={LoginScreen} />} />
                    <Route path='/register' component={props => <RemoveAuth {...props} Component={RegisterScreen} />} />
                </Switch>
            </div>
        </Router>
    )
}
