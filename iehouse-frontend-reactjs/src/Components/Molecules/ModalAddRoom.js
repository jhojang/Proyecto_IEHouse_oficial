import React from 'react'
import { Modal } from 'react-bootstrap';
import roomVector from '../../img/roomVector.jpg';

export const ModalAddRoom = ({showM, handleCloseModal, handleAddRoom}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const roomName = document.querySelector('#roomName').value;
        if ((roomName.trim()).length == 0) {
            alert('El campo de nombre está vacío');
        } else {
            const json = {
                name: roomName
            }
            handleAddRoom(json);
            handleCloseModal();
        }
        
    }

    return (
        <Modal className="modal modal-bulb-room" show={showM} onHide={handleCloseModal}>
            <Modal.Header className="text-size-6 border-0 border-bottom" closeButton>Agregar cuarto</Modal.Header>
            <Modal.Body className="p-0 pt-0 pb-4 modal-add-room-bg">
                <div className="row pl-4 pr-5">
                    <div className="col">
                        <img className="add-room-img" src={roomVector} />
                    </div>
                    <div className="col d-flex align-items-center p-0 pt-4">
                        <form className="m-0 w-100" onSubmit={handleSubmit} >
                            <input id="roomName" autoFocus={true} name="name" type="text" className="form-control border-none mb-2" placeholder="Ingrese el nombre" />
                            <input type="submit" className="btn bg-white btn-block" />
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
