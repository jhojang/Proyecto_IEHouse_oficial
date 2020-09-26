import { useState, useEffect } from 'react';

export const useFetchUser = (action) => {

    const [csrfToken, setCsrfToken] = useState('');
    const [respStatus, setRespStatus] = useState({});
    const [users, setUsers] = useState([]);

    const traerCsrfToken = () => {
        fetch('http://iehouse-auth-laravel.test/api/show-token')
        .then(resp => resp.text())
        .then(data => {
            setCsrfToken(data);
        });
    }

    useEffect(() => {
        traerCsrfToken();
    }, [])

    const handleCreate = (json, setValidator, register_form) => {

        const formData = new FormData();

        formData.append('json', JSON.stringify(json));
        fetch('http://iehouse-auth-laravel.test/api/' + action, {
            method: 'POST',
            body: formData,
            header: {
                // 'X-CSRF-TOKEN': csrfToken,
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let errores = {
                username: '',
                name: '',
                last_name: '',
                email: '',
                password: ''  
            }
            if (data.status === 'error') {
                    for (let [key, value] of Object.entries(data.error)) {
                        // errores = {
                        //     ...errores,
                        //     [key]: value[0]
                        // }

                        if (value[0] === 'The username field is required.') {
                            errores = {
                                ...errores,
                                [key]: 'El usuario es requerido'
                            }
                        } else if (value[0] === 'The name field is required.') {
                            errores = {
                                ...errores,
                                [key]: 'El nombre es requerido'
                            }
                        } else if (value[0] === 'The last name field is required.'){
                            errores = {
                                ...errores,
                                [key]: 'El apellido es requerido'
                            }
                        } else if (value[0] === 'The email field is required.'){
                            errores = {
                                ...errores,
                                [key]: 'El email es requerido'
                            }
                        } else if (value[0] === 'The password field is required.'){
                            errores = {
                                ...errores,
                                [key]: 'La contraseña es requerido'
                            }
                        } else if (value[0] === 'The username has already been taken.'){
                            errores = {
                                ...errores,
                                [key]: 'El usuario ya existe'
                            }
                        } else if (value[0] === 'The email has already been taken.'){
                            errores = {
                                ...errores,
                                [key]: 'El correo ya existe'
                            }
                        }
                        else {
                            errores = {
                                ...errores,
                                [key]: value[0]
                            }
                        }
                        
                    }
                    setValidator(({
                        errores,
                        show: true
                    }));
            } else if (data.status === 'success') {
                alert('Usuario registrado exitosamente');
                setValidator({
                    errores,
                    show: false
                });
                register_form.reset();
            }
            
        })

    }

    const handleLogin = (json, setValidator, login_form, setLoggedIn) => {
        const formData = new FormData();

        formData.append('json', JSON.stringify(json));
        fetch('http://iehouse-auth-laravel.test/api/' + action, {
            method: 'POST',
            body: formData,
            header: {
                // 'X-CSRF-TOKEN': csrfToken,
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let errores = {
                userOrEmail: '',
                password: ''
            }
            if (data.message === 'El usuario no ha sido creado') {

                for (let [key, value] of Object.entries(data.error)) {
                    if (value[0] === 'The user or email field is required.') {
                        errores = {
                            ...errores,
                            [key]: 'Usuario o email requerido'
                        }
                    } else if (value[0] === 'The password field is required.') {
                        errores = {
                            ...errores,
                            [key]: 'La contraseña es requerida'
                        }
                    } else {
                        errores = {
                            ...errores,
                            [key]: value[0]
                        }
                    }
                }
                
                setValidator({
                    errores,
                    show: true
                });

            } else if (data.message === 'Login incorrecto') {
                alert('Usuario o contraseña incorrectos');
            } else {
                localStorage.setItem('token', JSON.stringify(data));
                setLoggedIn(true);
                login_form.reset();
            }
        });
    }

    const handleGrantedAccess = (token, setUser) => {

        fetch('http://iehouse-auth-laravel.test/api/' + action, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization': token
            }
        })
        .then(resp => resp.json())
        .then(data => {
            
            if (data.status === 'success') {
                setUser(data.user);
            } else {
                console.log('hubo un error con el token');
            }

        })

    }


    const handleListUser = () => {

        fetch("http://localhost:8080/" + action)
        .then(resp => resp.json())
        .then(data => {
            setUsers(data);
        })

    }

    return {
        users,
        handleListUser,
        respStatus,
        handleCreate,
        handleLogin,
        handleGrantedAccess,
        traerCsrfToken
    };

}
