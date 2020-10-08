import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { ForgotPasswordForm } from '../Molecules/ForgotPasswordForm';
import { Link } from 'react-router-dom';
import mailSent from '../../img/mail-sent-2.png';

export const ForgotPasswordScreen = () => {
    const [validator, setValidator] = useState({
        errores: {
            email: '' 
        },
        show: false
    })

    const {handleForgotPassword} = useFetchUser();

    const [showModal, setShowModal] = useState({
        show: false,
        message: ''
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const forgot_form = document.querySelector("#forgot_form");
        const formData = new FormData(forgot_form);
        const formDataJson = {};
        formData.forEach((value, key) => {
            formDataJson[key] = value;
        });
        
        handleForgotPassword(formDataJson, setValidator, forgot_form, setShowModal);
    }

    return (
        
        <div className="bg-primary">
            <div className="vh-100 d-flex align-items-center pl-5">
                <ForgotPasswordForm handleSubmit={handleSubmit} validator={validator} />
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
