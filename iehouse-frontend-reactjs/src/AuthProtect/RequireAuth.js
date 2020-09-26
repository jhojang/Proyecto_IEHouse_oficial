import React from 'react'
import { Redirect } from 'react-router-dom'

export const RequireAuth = ({ Component }) => {

    if (localStorage.getItem('token') === null) {
        return <Redirect exact to='/login' />
    }
    return <Component />;
}
