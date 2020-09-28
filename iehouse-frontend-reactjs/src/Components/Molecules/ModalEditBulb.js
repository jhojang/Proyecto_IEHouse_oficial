import React, { useEffect, useState, useMemo } from 'react'
import { Modal } from 'react-bootstrap';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { useFetchBulb } from '../../Hooks/useFetchBulb';
import bulbVector from '../../svg/bulbVector.svg';
import Select from 'react-select';
import { useFormChange } from '../../Hooks/useFormChange';
import avatar from '../../img/avatar.jpg';
import { UserCardCheckbox } from '../Atoms/UserCardCheckbox';

export const ModalEditBulb = ({showModal, handleCloseModal, rooms, singleBulb}) => {
    
    const { handleUpdateBulb } = useFetchBulb();

    const { users, handleListUser } = useFetchUser('users');

    const {
        inputValue,
        setInputValue,
        setSelectValue,
        handleInputChange,
        checkboxValue,
        handleInputCheckbox,
        selectValue,
        handleInputSelect
    } = useFormChange();


    useEffect(() => {
        setInputValue({
            bulb: singleBulb.name
        });
        setSelectValue(singleBulb.room.id);
        handleListUser();
    }, [])

    useMemo(() => (
        singleBulb.user.forEach(user => {
            let json = {
                target: {
                    checked: true,
                    name: 'id',
                    value: user.id.toString()
                }
            }
            handleInputCheckbox(json);
        })
    ), [singleBulb])
    
    


    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateBulb(inputValue.bulb, checkboxValue, singleBulb.id, selectValue);
    }

    const optionRoom = [];
    rooms.forEach(room => {
        let json = { value: room.id, label: room.name }
        optionRoom.push(json);
    });

    return (
        <>
            <Modal className="modal modal-bulb" show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="text-size-8 border-0 pl-5 border-bottom" closeButton>Editar bombillo</Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <img src={bulbVector} />
                        </div>
                        <div className="col">
                        <form>
                            <div className="form-group">
                                <label htmlFor="disabledTextInput">Ingresa el nombre del bombillo</label>
                                <input 
                                    type="text" 
                                    name="bulb" 
                                    id="disabledTextInput" 
                                    className="form-control" 
                                    placeholder="Nombre"
                                    onChange={handleInputChange}
                                    value={inputValue.bulb}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="disabledSelect">Cuarto</label>
                                <Select
                                    options={optionRoom}
                                    defaultValue={{label: singleBulb.room.name, value: singleBulb.room.id}}
                                    placeholder="Selecciona un cuarto"
                                    onChange={handleInputSelect}
                                />
                            </div>
                            <p className="mb-0">Permisos</p>
                            <div className="user-checkbox-container pt-3 w-100 d-flex flex-wrap overflow-auto">
                                {
                                    users.map(user => (
                                        <UserCardCheckbox
                                            key={user.id}
                                            user={user} 
                                            avatar={avatar} 
                                            handleInputCheckbox={handleInputCheckbox}
                                            checkboxValue={checkboxValue}
                                        />
                                    ))
                                }
                            </div>
                            <input type="submit" className="btn btn-primary" value="Enviar" onClick={handleSubmit} />
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
