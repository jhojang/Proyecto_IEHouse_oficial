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
import { AccountScreen } from '../Components/Templates/AccountScreen';
import { RequireAuth } from '../AuthProtect/RequireAuth';
import { RemoveAuth } from '../AuthProtect/RemoveAuth';
import { ForgotPasswordScreen } from '../Components/Templates/ForgotPasswordScreen';
import { RecovePasswordScreen } from '../Components/Templates/RecovePasswordScreen';

export const AppRouter = () => {
    // Rutas principales fuera de la autenticación
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={IndexScreen} />
                    {/* Para proteger las rutas, al componente RequireAuth se le pasa cada componente correspondiente a cada página
                      */}
                    <Route path='/account' component={props => <RequireAuth {...props} Component={AccountScreen} />} />
                    <Route path='/login' component={props => <RemoveAuth {...props} Component={LoginScreen} />} />
                    <Route path='/register' component={props => <RemoveAuth {...props} Component={RegisterScreen} />} />
                    <Route path='/forgot-password' component={props => <RemoveAuth {...props} Component={ForgotPasswordScreen} />} />
                    <Route path='/recove-password' component={props => <RemoveAuth {...props} Component={RecovePasswordScreen} />} />
                </Switch>
            </div>
        </Router>
    )
}
