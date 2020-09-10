import { useState, useEffect } from 'react'

export const useFetchUser = (action) => {
    // const [user, setUser] = useState({
    //     username: '',
    //     name: '',
    //     last_name: '',
    //     email: '',
    //     password: '',
    //     confirm_password: ''
    // })

    const [csrfToken, setCsrfToken] = useState('');
    const [respStatus, setRespStatus] = useState({});

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
        console.log(...formData);
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
                                [key]: 'El contraseña es requerido'
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
                setValidator(({
                    errores,
                    show: false
                }));
                register_form.reset();
            }
            
        })

    }

    return {
        respStatus: respStatus,
        handleCreate: handleCreate,
        traerCsrfToken: traerCsrfToken
    };

}
