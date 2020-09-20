import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';


export const Bulb = ({name}) => {
    return (
        <button className="bulb card text-white text-dark mb-3 w-30 border-0 mb-4">
            <div className="card-header bg-transparent border-0 mt-0 mb-0 mr-auto ml-auto">{name}</div>
            <div className="w-100 pt-0 pb-3 mb-2 mt-0">
                <div className="bulb-icon"><FontAwesomeIcon icon={faLightbulb} /></div>
            </div>
        </button>
    )
}
