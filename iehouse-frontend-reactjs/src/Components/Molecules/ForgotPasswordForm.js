import React from 'react';
import formdec from '../../img/formdec.png';
import { Link } from 'react-router-dom';

export const ForgotPasswordForm = ({handleSubmit, validator}) => {
    return (
        <form id="forgot_form" className="auth-form col-4 bg-white p-5 rounded shadow ml-5" onSubmit={handleSubmit}>
            <div className="text-center">
                <img className="formdec" src={formdec} alt="formdec" />
            </div>
            <div className="errorInputValue mt-3">
                {(validator.show) && validator.errores.email}
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" name="email" id="email" className="form-control" placeholder="Ingresa el correo electrónico" />
                </div>
            </div>
            
            <div className="row">
                <div className="col mt-3">
                    <input type="submit" value="Enviar" className="btn btn-primary form-control" />
                </div>
            </div>
            <div className="mt-3 text-center">
                <p className="m-0"><Link to="/login">Volver</Link></p>
            </div>
        </form>
    )
}
