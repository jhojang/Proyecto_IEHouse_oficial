import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export const HoraryItem = () => {
    return (
        <div className="alert-blue mt-2 rounded p-2 pl-3">
            <span><FontAwesomeIcon icon={faClock} /></span> Sala1 <span>1:00pm - 2:00pm</span>
        </div>
    )
}
