import React, { useState } from 'react';
import { NavBar } from '../Organisms/NavBar';
import { Redirect } from 'react-router-dom';

export const HomeScreen = () => {

    const [loggedIn, setLoggedIn] = useState(true)
    
    const handleLogOut = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    }

    if (loggedIn === false) {
        return <Redirect exact to='/login' />
    }

    return (
        <div>
            <NavBar handleLogOut={handleLogOut} />
            <h2>HomeScreen</h2>
        </div>
    )
}