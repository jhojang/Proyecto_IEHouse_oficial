import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBolt, faLightbulb as faSolidBulb, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../img/avatar.jpg';
import logoPrueba from '../../img/logoPrueba.jpg';
import { Link, NavLink } from 'react-router-dom';

export const SideBar = ({user}) => {
    return (
        <div class="bg-white border-right" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom sticky-top bg-white">
                Lala
                <img className="logo" src={ logoPrueba } alt="IE House" />
            </div>
            <div className="user-hud border-bottom bg-white d-flex align-items-center justify-content-center flex-column ml-auto mr-auto m-0 sticky-top-2">
                <img src={ avatar } />
                <p className="wellcome-user">Buenas días, <span>{user.username}</span></p>
                <p class="role alert alert-warning">{(user.rol === 1) ? 'Administrador' : 'Usuario común'}</p>
            </div>
            <div class="list-group list-group-flush sticky-top-3 p-3" id="sidebar-list-group">
                <Link to="/account/" class="list-group-item list-group-item-active list-group-item-action mb-2 p-2 rounded-lg font-weight-bold"><span className="aside-icon text-success"><FontAwesomeIcon icon={faHome} /></span><span className="pl-2">Inicio</span></Link>
                <Link to="/account/bulbs" class="list-group-item list-group-item-action mb-2 p-2 rounded-lg  font-weight-bold"><span className="aside-icon text-warning"><FontAwesomeIcon icon={faSolidBulb} /></span><span className="pl-2">Bombillos</span></Link>
                <Link to="/account/energia" class="list-group-item list-group-item-action mb-2 p-2 rounded-lg  font-weight-bold"><span className="aside-icon text-primary"><FontAwesomeIcon icon={faBolt} /></span><span className="pl-2">Informe energía</span></Link>
                <a href="#" class="list-group-item list-group-item-action mb-2 p-2 rounded-lg  font-weight-bold"><span className="aside-icon text-secondary"><FontAwesomeIcon icon={faCog} /></span><span className="pl-2">Configuración</span></a>
                <a href="#" class="list-group-item list-group-item-action mb-2 p-2 rounded-lg  font-weight-bold"><span className="aside-icon text-danger"><FontAwesomeIcon icon={faEnvelope} /></span><span className="pl-2">Contacto</span></a>
            </div>
        </div>
    )
}
