import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Se recibe en las props la variable iterHistory que contiene la lista de horarios
// La función handleDeleteHorary hace la petición al backend para eliminar un horario
export const HoraryItem = ({iterHorary, handleDeleteHorary}) => {

    return (
        <>
        {
            // Se mapea la lista de historiales
            iterHorary.map(horary => (
                <div className="alert-blue mt-2 rounded p-2 pl-3 d-flex justify-content-between">
                    <div>
                        <span><FontAwesomeIcon icon={faClock} /></span> {horary.bulb_name} <span>{horary.date}</span> <span>{horary.hour}</span>
                    </div>
                    {/* Botón para eliminar el historial */}
                    <div>
                        <button onClick={() => handleDeleteHorary(horary.id)} className="alert-blue m-0 p-0 bg-transparent border-0"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            ))
        }
        </>
    )
}
