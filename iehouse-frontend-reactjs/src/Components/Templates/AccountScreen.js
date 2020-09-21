import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../Hooks/useUser';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { AccountRoutes } from '../../Routes/AccountRoutes';

export const AccountScreen = () => {

    const [actualPageBody, setActualPageBody] = useState(localStorage.getItem('PageBody'));

    const {handleGrantedAccess} = useFetchUser('granted-access');

    const checkToken = () => {
        const token = localStorage.getItem('token');
        handleGrantedAccess(token, setUser);
    }

    const {user, setUser} = useUser();

    useEffect(() => {
        checkToken();
    }, []);

    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    }

    if (loggedIn === false) {
        return <Redirect exact to='/login' />
    }
    
    return (
        <>
            <AccountRoutes 
                user={user} 
                handleLogOut={handleLogOut} 
                actualPageBody={actualPageBody}
                setActualPageBody={setActualPageBody}
            />
        </>
    )
}