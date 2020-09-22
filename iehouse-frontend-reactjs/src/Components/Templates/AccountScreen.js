import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../Hooks/useUser';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { AccountRoutes } from '../../Routes/AccountRoutes';
import { UseContext } from '../../Context/UseContext';
import { useFetchRoom } from '../../Hooks/useFetchRoom';
import { useFetchBulb } from '../../Hooks/useFetchBulb';

export const AccountScreen = () => {

    const { rooms, handleListRoom } = useFetchRoom();
    const { bulbs, handleListBulb } = useFetchBulb();

    useEffect(() => {
        handleListBulb();
        handleListRoom();
    }, [])

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
        localStorage.removeItem('PageBody');
        setLoggedIn(false);
    }

    if (loggedIn === false) {
        return <Redirect exact to='/login' />
    }
    
    return (
        <>
        <UseContext.Provider value={{user, bulbs, rooms, handleListBulb, handleListRoom}}>
            <AccountRoutes 
                user={user} 
                handleLogOut={handleLogOut} 
                actualPageBody={actualPageBody}
                setActualPageBody={setActualPageBody}
            />
        </UseContext.Provider>
        </>
    )
}