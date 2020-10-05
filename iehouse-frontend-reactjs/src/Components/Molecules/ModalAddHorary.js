import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { useFetchBulb } from '../../Hooks/useFetchBulb';
import bulbVector from '../../svg/bulbVector.svg';
import Select from 'react-select';
import { useFormChange } from '../../Hooks/useFormChange';
import { UserCardCheckbox } from '../Atoms/UserCardCheckbox';
import { useFetchHorary } from '../../Hooks/useFetchHorary';


export const ModalAddHorary = ({showModal, handleCloseModal, bulbs, handleCreateHorary}) => {

    const {selectValue, handleInputSelect} = useFormChange();

    // const {horarys, handleListHorary} = useFetchHorary();

    // handleListHorary();

    // const [actualDate, setActualDate] = useState();


    // useEffect(() => {
    //     setActualHour();
    //     console.log(bulbs);
    // }, [])

    // const setActualHour = () => {
    //     // 2020-01-01T01:00
    //     const date = new Date();
    //     const year = date.getFullYear();
    //     const month = date.getMonth();
    //     const day = date.getDay();
    //     console.log(date);
    //     // setActualDate(dateString);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const starts_at = document.querySelector('#starts_at').value;
        // console.log(starts_at);
        // console.log(selectValue);
        handleCreateHorary(starts_at, selectValue);
    }

    const optionBulb = [];
    bulbs.forEach(bulb => {
        let json = { value: bulb.id, label: bulb.name }
        optionBulb.push(json);
    });

    

    // const { handleCreateBulb } = useFetchBulb();

    // const { users, handleListUser } = useFetchUser('users');

    // const {
    //     inputValue,
    //     handleInputChange,
    //     checkboxValue,
    //     handleInputCheckbox,
    //     selectValue,
    //     handleInputSelect,
    //     resetInputValue
    // } = useFormChange();

    // console.log(inputValue);


    // useEffect(() => {
    //     handleListUser();
    // }, [])


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleCreateBulb(inputValue.bulb, checkboxValue, selectValue);
    //     resetInputValue();
    // }

    // const optionRoom = [];
    // rooms.forEach(room => {
    //     let json = { value: room.id, label: room.name }
    //     optionRoom.push(json);
    // });


    

    return (
        <>
            <Modal className="modal modal-bulb" show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="text-size-8 border-0 pl-5 border-bottom" closeButton>Programar Horario</Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <img src={bulbVector} />
                        </div>
                        <div className="col">
                        <form id="formlala" onSubmit={handleSubmit} >
                            <label htmlFor="starts_at">Inicio</label>
                            <input className="form-control mb-3" id="starts_at" type="datetime-local"  />
                            <label htmlFor="endss_at">Fin (Opcional)</label>
                            <input className="form-control mb-3" id="ends_at" type="datetime-local"  />
                            <div className="form-group">
                                <label htmlFor="disabledSelect">Cuarto</label>
                                <Select
                                    options={optionBulb}
                                    placeholder="Selecciona el bombillo"
                                    onChange={handleInputSelect}
                                />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Enviar" />
                        </form>
                        
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleCloseModal} className="btn primary bg-white pl-4 pr-4" href="#">Cerrar</button>
                </Modal.Footer>
            </Modal>  
        </>
    )
}
