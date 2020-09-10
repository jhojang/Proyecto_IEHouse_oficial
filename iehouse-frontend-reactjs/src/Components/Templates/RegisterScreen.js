import React, { useState, useEffect } from 'react';
import loginVector from '../../svg/loginVector.svg';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { RegisterForm } from '../Molecules/RegisterForm';

export const RegisterScreen = () => {

    const [validator, setValidator] = useState({
        errores: {
            username: '',
            name: '',
            last_name: '',
            email: '',
            password: ''  
        },
        show: false
    })
    const {handleCreate} = useFetchUser('register');

    useEffect(() => {
        console.log(validator);
    }, [validator])

    const handleSubmit = (e) => {
        e.preventDefault();
        const register_form = document.querySelector("#register_form");
        const formData = new FormData(register_form);
        const formDataJson = {};
        formData.forEach((value, key) => {
            formDataJson[key] = value;
        });
        
        handleCreate(formDataJson, setValidator, register_form);
        
    }

    return (
        <div className="bg-primary">
            <div className="vh-100 d-flex align-items-center pl-5">
                    <RegisterForm handleSubmit={handleSubmit} validator={validator} />
                <div className="col-1">

                </div>
                <div className="col-5">
                    <img src={loginVector} alt="loginVector" />
                </div>
            </div>
        </div>
    )
}
