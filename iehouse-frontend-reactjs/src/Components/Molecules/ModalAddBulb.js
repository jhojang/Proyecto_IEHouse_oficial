import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useFetchUser } from '../../Hooks/useFetchUser';
import { useFetchBulb } from '../../Hooks/useFetchBulb';
import bulbVector from '../../svg/bulbVector.svg';
import Select from 'react-select';
import { useFormChange } from '../../Hooks/useFormChange';


export const ModalAddBulb = ({showModal, handleCloseModal, avatar, rooms}) => {

    const { handleCreateBulb } = useFetchBulb();

    const { users, handleListUser } = useFetchUser('users');

    const {
        inputValue,
        handleInputChange,
        checkboxValue,
        handleInputCheckbox,
        selectValue,
        handleInputSelect,
        resetInputValue
    } = useFormChange();


    useEffect(() => {
        handleListUser();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateBulb(inputValue.bulb, checkboxValue, selectValue);
        resetInputValue();
    }

    const optionRoom = [];
    rooms.forEach(room => {
        let json = { value: room.id, label: room.name }
        optionRoom.push(json);
    });


    

    return (
        <>
            <Modal className="modal modal-bulb" show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="text-size-8 border-0 pl-5 border-bottom" closeButton>Agregar bombillo</Modal.Header>
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
                                    value={inputValue.name}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="disabledSelect">Cuarto</label>
                                <Select
                                    options={optionRoom}
                                    placeholder="Selecciona un cuarto"
                                    onChange={handleInputSelect}
                                />
                            </div>
                            <p className="mb-0">Permisos</p>
                            <div className="user-checkbox-container pt-3 w-100 d-flex flex-wrap overflow-auto">
                                {
                                    users.map(user => (
                                        <div key={user.id} class="mr-2">
                                            <input type="checkbox" name="id" onChange={handleInputCheckbox} value={user.id} className="user-checkbox" id={`customCheckDisabled${user.id}`} />
                                            <label className="label-user" htmlFor={`customCheckDisabled${user.id}`}><img src={avatar} /><span>{user.username}</span></label>
                                        </div>
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
