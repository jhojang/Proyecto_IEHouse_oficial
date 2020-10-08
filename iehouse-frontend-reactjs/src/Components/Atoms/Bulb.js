import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCog, faTrash } from '@fortawesome/free-solid-svg-icons';

// Se reciben las props que vienen del componente padre <BulbBody />
export const Bulb = ({name, id, state, handleStateBulb, handleDeleteBulb, handleOpenModal, handleCreateHistory, handleUpdateHistory, handleListInform, informs}) => {

    // Función toggle: cambia el estado del bombillo al hacer click sobre este
    const handleToggleState = (id, state) => {
        // La variable state contiene el estado del bombillo (true o false)
        // Condicional ternario: Si state tiene el valor false, se le asigana el valor true, sino, se le asigna false
        state = (state === false) ? true : false; 
        handleStateBulb(id, state); // Función que hace la petición al backend para actualizar el estado del bombillo, recibe el id y el state


        // if (state === true) {
        //     handleCreateHistory(id, state);
        // } else if (state === false) {
        //     handleUpdateHistory(id, state);
        // }

        // handleListInform();
    }

    // useEffect(() => {
        
    // }, [informs])

    return (
        <div className="bulb-container w-30 mb-4" >
            {/* Bombillo. Si el state tiene el valor true, se añade la clase 'bulb-on',
                si tieene el valor false, se le quita
             */}
            <button className={`bulb card text-white text-dark w-100 border-0 ${state === true && 'bulb-on'}`} onClick={() => handleToggleState(id, state)} >
                <div className={`${state === true && 'text-primary'} card-header  bg-transparent border-0 mt-0 mb-0 mr-auto ml-auto`}>{name}</div>
                <div className={`w-100 pt-0  pb-3 mb-2 mt-0`}>
                    <div className={`${state === true && 'text-primary'} bulb-icon`}><FontAwesomeIcon icon={faLightbulb} /></div>
                </div>
            </button>
            {/* Botones Actualizar y Eliminar
                El botón actualizar llama la función que abre el modal para actualizar bombillos
                El botón eliminar llama la función que hace la petición al backend para eliminarel bombillo
             */}
            <div className="d-flex justify-content-end">
                <button onClick={() => handleOpenModal('editBulb', id)} className="border-0 mr-1 p-1"><FontAwesomeIcon icon={faCog} /></button>
                <button onClick={() => handleDeleteBulb(id)} className="border-0 p-1"><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}
