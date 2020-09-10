import React, { useState } from 'react';
import loginVector from '../../svg/loginVector.svg';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { LoginForm } from '../Molecules/LoginForm';
import { Redirect } from 'react-router-dom';

export const LoginScreen = () => {

    const [validator, setValidator] = useState({
        errores: {
            userOrEmail: '',
            password: ''  
        },
        show: false
    })

    const {handleLogin} = useFetchUser('login');

    const [loggedIn, setLoggedIn] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const login_form = document.querySelector("#login_form");
        const formData = new FormData(login_form);
        const formDataJson = {};
        formData.forEach((value, key) => {
            formDataJson[key] = value;
        });
        
        handleLogin(formDataJson, setValidator, login_form, setLoggedIn);
    }

    if (loggedIn === true) {
        return <Redirect to='/home' />
    }

    return (
        
        <div className="bg-primary">
            <div className="vh-100 d-flex align-items-center pl-5">
                    <LoginForm handleSubmit={handleSubmit} validator={validator} />
                <div className="col-1">

                </div>
                <div className="col-5">
                    <img src={loginVector} alt="loginVector" />
                </div>
            </div>
        </div>
    )
}
