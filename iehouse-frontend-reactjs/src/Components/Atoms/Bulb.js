import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCog, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Bulb = ({name, id, state, handleStateBulb, handleDeleteBulb}) => {

    const handleToggleState = (id, state) => {
        state = (state === false) ? true : false;
        handleStateBulb(id, state);
    }

    return (
        <div className="bulb-container w-30 mb-4" >
            <button className={`bulb card text-white text-dark w-100 border-0 ${state === true && 'bulb-on'}`} onClick={() => handleToggleState(id, state)} >
                <div className={`${state === true && 'text-primary'} card-header  bg-transparent border-0 mt-0 mb-0 mr-auto ml-auto`}>{name}</div>
                <div className={`w-100 pt-0  pb-3 mb-2 mt-0`}>
                    <div className={`${state === true && 'text-primary'} bulb-icon`}><FontAwesomeIcon icon={faLightbulb} /></div>
                </div>
            </button>
            <div className="d-flex justify-content-end">
                <button className="border-0 mr-1 p-1"><FontAwesomeIcon icon={faCog} /></button>
                <button onClick={() => handleDeleteBulb(id)} className="border-0 p-1"><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}
