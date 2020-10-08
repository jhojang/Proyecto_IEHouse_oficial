import React from 'react';
import formdec from '../../img/formdec.png';

export const RecovePasswordForm = ({handleSubmit, validator}) => {
    return (
        <form id="recove_form" className="auth-form col-4 bg-white p-5 rounded shadow ml-5" onSubmit={handleSubmit}>
            <div className="text-center">
                <img className="formdec" src={formdec} alt="formdec" />
            </div>
            <div className="errorInputValue mt-3">
                {(validator.show) && validator.errores.password}
            </div>
            <div className="row">
                <div className="col">
                    <input type="password" name="password" id="password" className="form-control" placeholder="Ingresa la nueva contraseña" />
                </div>
            </div>
            {/* <div className="errorInputValue mt-3">
                {(validator.show) && validator.errores.password}
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" name="password2" id="password2" className="form-control" placeholder="Confirmar contraseña" />
                </div>
            </div> */}
            <div className="row">
                <div className="col mt-3">
                    <input type="submit" value="Enviar" className="btn btn-primary form-control" />
                </div>
            </div>
        </form>
    )
}
