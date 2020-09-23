import React, { useState } from 'react'
import Select from 'react-select';
import bulbVector from '../../svg/bulbVector.svg';
import avatar from '../../img/avatar.jpg';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export const ModalEditRoom = ({showM, handleCloseModal, handleDeleteRoom, rooms}) => {

    const [showRoomForm, setShowRoomForm] = useState(0)

    const handleFormToggle = (e, idRoom) => {
        e.preventDefault();
        setShowRoomForm(idRoom);
    }

    const handleDelete = (e, idRoom) => {
        e.preventDefault();
        handleDeleteRoom(idRoom);
    }

    return (
        <>
            <Modal className="modal modal-bulb" show={showM} onHide={handleCloseModal}>
            <Modal.Header className="text-size-8 border-0 pl-5 border-bottom" closeButton>Editar Cuartos</Modal.Header>
            <Modal.Body>
            <div className="row">
                <div className="col">
                    <img src={bulbVector} />
                </div>
                <div className="col">
                    
                    {
                        rooms.map(room => (
                            (showRoomForm !== room.id) ? (
                                <form key={room.id} className="card-room border mr-3 d-flex align-items-center mb-2 shadow">
                                    <span className="icon-room p-2 bg-primary text-white">
                                        <FontAwesomeIcon icon={faHouseUser} />
                                    </span>
                                        
                                    <div className="p-2 w-100 d-flex">
                                        <div className="w-100">
                                            {room.name}
                                        </div>
                                    </div>
                                    <button className="p-1 ml-1 mr-1 border-0 bg-white text-size-5" onClick={(e) => handleFormToggle(e, room.id)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="p-1 mr-2 border-0 bg-white text-size-5" onClick={(e) => handleDelete(e, room.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </form>
                            ) : (
                                <div key={room.id} className="d-flex flex-column w-100 bg-white shadow mb-2 p-3">
                                    <input type="text" name="roomName" defaultValue={room.name} id="input-edit-name" className="input-edit-name form-control border-0 mb-2" placeholder="Ingrese el nombre del cuarto" autoFocus={true} />
                                    <div className="d-flex justify-content-end">
                                        <input type="submit" value="Enviar" className="btn btn-primary mr-2" />
                                        <button type="submit" className="btn btn-primary" onClick={(e) => handleFormToggle(e, false)} >Cancelar</button>
                                    </div>
                                </div>
                            )
                        ))
                    }
                    
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
