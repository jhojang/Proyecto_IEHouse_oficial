import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect
} from "react-router-dom";
import BulbBody from '../Components/Organisms/BulbBody';
import { NavBar } from '../Components/Organisms/NavBar';
import { SideBar } from '../Components/Organisms/SideBar';

export const AccountRoutes = ({user, handleLogOut}) => {
    return (
        <Router>
            <div>
                <div class="d-flex bg-white global">
                <SideBar user={user} />

                <div className="w-100">
                    <NavBar handleLogOut={handleLogOut} />

                    <Switch>
                        <Route path='/account/bulbs' component={BulbBody} />
                    </Switch>
                </div>
                </div>
            </div>
        </Router>
    )
}