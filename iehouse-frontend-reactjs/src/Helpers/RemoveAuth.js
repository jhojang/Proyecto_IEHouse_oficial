import React from 'react'
import { Redirect } from 'react-router-dom'

export const RemoveAuth = ({ Component }) => {

    if (localStorage.getItem('token') !== null) {
        return <Redirect exact to='/home' />
    }
    return <Component />;
}
