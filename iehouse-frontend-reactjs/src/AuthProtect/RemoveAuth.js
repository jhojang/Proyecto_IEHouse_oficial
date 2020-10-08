import React from 'react'
import { Redirect } from 'react-router-dom'

// Componente para la protección de las rutas de la autenticación
export const RemoveAuth = ({ Component }) => {

    // Si en el localStorage del navegador no está el token de autenticación, entonces redirecciona al login
    if (localStorage.getItem('token') !== null) {
        return <Redirect exact to='/account' />
    }
    return <Component />;
}
