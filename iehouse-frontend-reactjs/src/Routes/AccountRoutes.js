import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect
} from "react-router-dom";
import BulbBody from '../Components/Organisms/BulbBody';
import { HomeBody } from '../Components/Organisms/HomeBody';
import { NavBar } from '../Components/Organisms/NavBar';
import { SideBar } from '../Components/Organisms/SideBar';

export const AccountRoutes = ({user, handleLogOut, actualPageBody, setActualPageBody}) => {
    return (
        <Router>
            <div class="d-flex bg-white global">
                <SideBar 
                    user={user}
                    actualPageBody={actualPageBody}
                    setActualPageBody={setActualPageBody}
                />

                <div className="w-100 bg-light-1">
                    <NavBar handleLogOut={handleLogOut} />

                    <Switch>
                        <Route exact path='/account/bulbs' component={BulbBody} />
                        <Route exact path='/account/' component={HomeBody} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}