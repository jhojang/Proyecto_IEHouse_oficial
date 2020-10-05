import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const HoraryItem = ({iterHorary, handleDeleteHorary}) => {

    return (
        <>
        {
            iterHorary.map(horary => (
                <div className="alert-blue mt-2 rounded p-2 pl-3 d-flex justify-content-between">
                    <div>
                        <span><FontAwesomeIcon icon={faClock} /></span> {horary.bulb_name} <span>{horary.date}</span> <span>{horary.hour}</span>
                    </div>
                    <div>
                        <button onClick={() => handleDeleteHorary(horary.id)} className="alert-blue m-0 p-0 bg-transparent border-0"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            ))
        }
        </>
    )
}
