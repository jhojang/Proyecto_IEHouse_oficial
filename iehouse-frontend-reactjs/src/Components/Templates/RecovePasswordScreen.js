import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { RecovePasswordForm } from '../Molecules/RecovePasswordForm';
import { Link, Redirect } from 'react-router-dom';
import mailSent from '../../img/mail-sent-2.png';

export const RecovePasswordScreen = () => {
    const [validator, setValidator] = useState({
        errores: {
            password: '' 
        },
        show: false
    })

    const {handleRecovePassword, handleCheckRecoveToken} = useFetchUser();

    const [showModal, setShowModal] = useState({
        show: false,
        message: ''
    });

    const [validRecoveToken, setValidRecoveToken] = useState(true)

    const recove_roken = window.location.search.substring(1);

    useEffect(() => {
        
        const jsonToken = {};
        jsonToken['recover_token'] = recove_roken;
        handleCheckRecoveToken(jsonToken, setValidRecoveToken);
    }, [])

    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const recove_form = document.querySelector("#recove_form");
        const formData = new FormData(recove_form);
        const formDataJson = {};
        formData.forEach((value, key) => {
            formDataJson[key] = value;
        });
        formDataJson['recover_token'] = recove_roken;
        
        handleRecovePassword(formDataJson, setValidator, recove_form, setShowModal);
    }

    if (validRecoveToken === false) {
        return <Redirect to='/account' />
    } else {
        return (
            
            <div className="bg-primary">
                <div className="vh-100 d-flex align-items-center pl-5">
                    <RecovePasswordForm handleSubmit={handleSubmit} validator={validator} />
                </div>
                <Modal className="modal modal-bulb" show={showModal.show}>
                    {/* <Modal.Header className="text-size-8 border-0 pl-5 border-bottom">Editar bombillo</Modal.Header> */}
                    <Modal.Body>
                        <div className="row">
                        <div className="col">
                                <img className="mt-3 mb-3" src={mailSent} alt="mail sent" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <h3>{showModal.message}</h3>
                            </div>
                        </div>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/login" className="btn primary bg-white pl-4 pr-4" href="#" >Aceptar</Link>
                    </Modal.Footer>
                </Modal>  
            </div>
        )
    }
}
