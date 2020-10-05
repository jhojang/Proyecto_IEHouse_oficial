import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { HoraryItem } from '../Atoms/HoraryItem';
import { ModalAddHorary } from './ModalAddHorary';
import { useFetchHorary } from '../../Hooks/useFetchHorary';

export const Horary = ({bulbs}) => {

    const [showModal, setShowModal] = useState(false);

    const {horarys, handleListHorary, handleCreateHorary, handleDeleteHorary} = useFetchHorary();

    useEffect(() => {
        handleListHorary();
    }, [])

    

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const iterHorary = [];
    horarys.forEach(horary => {
        
        let bulb_name = '';
        bulbs.forEach(bulb => {
            if (horary.id_bombillo === bulb.id) {
                bulb_name = bulb.name;
            }
        })
        const json = {
            id: horary.id,
            date: (horary.starts_at).substr(0, 10),
            hour: (horary.starts_at).substr(11, 5),
            bulb_name: bulb_name
        }
        iterHorary.push(json)
    });

    const functionPrueba = () => {
        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        console.log(year + "-" + month + "-" + day + " " + hours + "-" + minutes + "-" + seconds);
    }


    return (
        
        <div class="card bg-white border-0">
            <div class="card-header bg-primary text-white border-0 d-flex justify-content-between align-items-center pr-0 pt-0 pb-0">
                <div>Horarios</div>
                <div className="header-icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faClock} /></div>
            </div>
            <div class="card-body p-0 border-top">
                <HoraryItem iterHorary={iterHorary} handleDeleteHorary={handleDeleteHorary} />
                
                <button 
                    className="border-0 mt-2 p-0 rounded pl-3 bg-white"
                    onClick={handleOpenModal}
                >
                    <span>+</span> Añadir horario
                </button>
            </div>
            {
                (showModal === true && (
                    <ModalAddHorary 
                        showModal={showModal} 
                        handleCloseModal={handleCloseModal} 
                        bulbs={bulbs} 
                        iterHorary={iterHorary}
                        handleCreateHorary = {handleCreateHorary}
                    />
                ))
            }
        </div>
    )
}
