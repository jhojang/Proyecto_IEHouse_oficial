import React from 'react';
import formdec from '../../img/formdec.png';
import { Link } from 'react-router-dom';

export const LoginForm = ({handleSubmit, validator}) => {
    return (
        <form id="login_form" className="auth-form col-4 bg-white p-5 rounded shadow ml-5" onSubmit={handleSubmit}>
            <div className="text-center">
                <img className="formdec" src={formdec} alt="formdec" />
            </div>
            <div className="errorInputValue mt-3">
                {(validator.show) && validator.errores.userOrEmail}
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" name="userOrEmail" id="userOrEmail" className="form-control" placeholder="Usuario o Correo electrónico" />
                </div>
            </div>
            
            <div className="errorInputValue mt-3">
                {(validator.show) && validator.errores.password}
            </div>
            <div className="row">
                <div className="col mr-0">
                    <input type="password" name="password" id="password" className="form-control" placeholder="Contraseña" />
                </div>
                {/* <div className="col ml-0">
                    <input type="password" name="confirm_password" id="conform_password" className="form-control" placeholder="Confirmar contraseña" />
                </div> */}
            </div>
            <div className="row">
                <div className="col mt-3">
                    <input type="submit" value="Enviar" className="btn btn-primary form-control" />
                </div>
            </div>
            <div className="mt-3 text-center">
                <p className="m-0">¿No tienes cuenta? <Link to="/register">Registrarse</Link></p>
                <p className="m-0"><Link to="/forgot-password">¿Olvidaste la contraseña?</Link></p>
            </div>
        </form>
    )
}
