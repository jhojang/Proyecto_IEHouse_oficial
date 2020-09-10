import React from 'react';
import formdec from '../../img/formdec.png';
import { Link } from 'react-router-dom';

export const RegisterForm = ({handleSubmit, validator}) => {
    return (
        <form id="register_form" className="auth-form col-4 bg-white p-5 rounded shadow ml-5" onSubmit={handleSubmit}>
            <div className="text-center">
                <img className="formdec" src={formdec} alt="formdec" />
            </div>
            <div className="errorInputValue mt-3">
                {(validator.show) && validator.errores.username}
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" name="username" id="username" className="form-control" placeholder="Usuario" />
                </div>
            </div>
            <div className="row">
                <div className="col mr-0">
                    <div className="errorInputValue mt-3">{(validator.show) && validator.errores.name}</div>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Nombre" />
                </div>
                <div className="col ml-0">
                    <div className="errorInputValue mt-3">{(validator.show) && validator.errores.last_name}</div>
                    <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Apellido" />
                </div>
            </div>
            <div className="errorInputValue mt-3">
                {(validator.show) && validator.errores.email}
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" name="email" id="email" className="form-control" placeholder="Email" />
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
                <p className="m-0">¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link></p>
            </div>
        </form>
    )
}
