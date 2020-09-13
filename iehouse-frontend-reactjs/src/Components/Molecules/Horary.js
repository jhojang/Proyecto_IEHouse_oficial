import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { HoraryItem } from '../Atoms/HoraryItem';

export const Horary = () => {
    return (
        
        <div class="card bg-white border-0">
            <div class="card-header bg-primary text-white border-0 d-flex justify-content-between align-items-center pr-0 pt-0 pb-0">
                <div>Horarios</div>
                <div className="header-icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faClock} /></div>
            </div>
            <div class="card-body p-0 border-top">
                <HoraryItem />
                <button className="border-0 mt-2 p-0 rounded pl-3 bg-white">
                    <span>+</span> Añadir horario
                </button>
            </div>
        </div>
    )
}
