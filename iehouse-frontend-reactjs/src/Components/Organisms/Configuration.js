import React, { useEffect, useContext } from 'react'
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { TitleCard } from '../Atoms/TitleCard';
import { UseContext } from '../../Context/UseContext';

export const Configuration = () => {

    

    return (
        <div>
            <div className="bg-white border-bottom p-3 pl-4">
                <h1 className="h1-global">Configuración</h1>
            </div>

            <div className="home-container bg-white m-4">
                <form>
                    <div className="form-group">
                        <label for="username">Nombre de usuario</label>
                        <input type="text" className="form-control" id="username" placeholder="Nombre de usuario" />
                    </div>
                    <div className="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Nombre" />
                    </div>
                    <div className="form-group">
                        <label for="last_name">Apellido</label>
                        <input type="text" className="form-control" id="last_name" placeholder="Apellido" />
                    </div>
                    <div className="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="text" className="form-control" id="email" placeholder="Correo electrónico" />
                    </div>
                    <div className="form-group">
                        <label for="password">Contraseña</label>
                        <input type="text" className="form-control" id="password" placeholder="Contraseña" />
                    </div>
                    <div className="form-group">
                        <label for="password_confirm">Confirmar contraseña</label>
                        <input type="text" className="form-control" id="password_confirm" placeholder="Confirmar contraseña" />
                    </div>
                </form>
            </div>
            
        </div>
    )
}
