import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBolt, faLightbulb as faSolidBulb, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../img/avatar.jpg';
import logo from '../../img/LOGO.png';
import { Link } from 'react-router-dom';

export const SideBar = ({user, actualPageBody, setActualPageBody}) => {

    const handleActiveNavLink = (pageBody) => {
        setActualPageBody(pageBody);
        localStorage.setItem('PageBody', pageBody);
    }

    return (
        <div className="bg-white border-right" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom sticky-top bg-white">
                <span className="text-white">
                    Lala
                </span>
                
                <img className="logo" src={ logo } alt="IE House" />
            </div>
            <div className="user-hud border-bottom bg-white d-flex align-items-center justify-content-center flex-column ml-auto mr-auto m-0 sticky-top-2">
                <img src={ avatar } />
                <p className="wellcome-user">Buenas días, <span>{user.username}</span></p>
                <p className="role alert alert-warning">{(user.rol === 1) ? 'Administrador' : 'Usuario común'}</p>
            </div>
            <div className="list-group list-group-flush sticky-top-3 p-3" id="sidebar-list-group">
                <Link to="/account/" onClick={() => handleActiveNavLink('')} className={`list-group-item ${actualPageBody === '' && "list-group-item-active"} mb-2 p-2 rounded-lg font-weight-bold`}><span className="aside-icon text-success"><FontAwesomeIcon icon={faHome} /></span><span className="pl-2">Inicio</span></Link>
                <Link to="/account/bulbs" onClick={() => handleActiveNavLink('bulbs')} className={`list-group-item ${actualPageBody === 'bulbs' && "list-group-item-active"} mb-2 p-2 rounded-lg  font-weight-bold`}><span className="aside-icon text-warning"><FontAwesomeIcon icon={faSolidBulb} /></span><span className="pl-2">Bombillos</span></Link>
                <Link to="/account/energy" onClick={() => handleActiveNavLink('energy')} className={`list-group-item ${actualPageBody === 'energy' && "list-group-item-active"} mb-2 p-2 rounded-lg  font-weight-bold`}><span className="aside-icon text-primary"><FontAwesomeIcon icon={faBolt} /></span><span className="pl-2">Informe energía</span></Link>
                <Link to="/account/configuration" onClick={() => handleActiveNavLink('configuration')} className={`list-group-item ${actualPageBody === 'configuration' && "list-group-item-active"} mb-2 p-2 rounded-lg  font-weight-bold`}><span className="aside-icon text-secondary"><FontAwesomeIcon icon={faCog} /></span><span className="pl-2">Configuración</span></Link>
                <a href="#" className="list-group-item list-group-item-action mb-2 p-2 rounded-lg  font-weight-bold"><span className="aside-icon text-danger"><FontAwesomeIcon icon={faEnvelope} /></span><span className="pl-2">Contacto</span></a>
            </div>
        </div>
    )
}
