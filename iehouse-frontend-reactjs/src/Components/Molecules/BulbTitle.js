import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'react-bootstrap';
import Select from 'react-select';
import bulbVector from '../../svg/bulbVector.svg';
import avatar from '../../img/avatar.jpg';
import { UseContext } from '../../Context/UseContext';

export const BulbTitle = ({roomMenu, setRoomMenu}) => {

    const {bulbs, rooms, handleListRoom} = useContext(UseContext);

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    
    rooms.forEach((room) => {
        let cont = 0;
        bulbs.forEach((bulb) => {
            if (room.id === bulb.room.id) {
                cont++;
            }
        });
        room.numBulbs = cont;
    });
 
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <div className="bg-white border-bottom pl-4 pr-4 pt-4 pb-0 m-0">
            <div className="row">
                <div className="col">
                    <h1>Bombillos</h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <ul className="nav">
                        <li className="nav-item">
                            <button className="btn btn-primary ml-4" href="#">Agregar cuarto</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleOpenModal} className="btn btn-primary ml-4" href="#">Agregar bombillo</button>
                        </li>
                    </ul>
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
                                        <label for="disabledTextInput">Ingresa el nombre del bombillo</label>
                                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label for="disabledSelect">Cuarto</label>
                                        <Select defaultValue={options[0]} options={options} />
                                    </div>
                                    <p className="mb-0">Permisos</p>
                                    <div className="user-checkbox-container pt-3 w-100 d-flex flex-wrap overflow-auto">
                                        <div class="mr-2">
                                            <input type="checkbox" className="user-checkbox" id="customCheckDisabled1" />
                                            <label className="label-user" for="customCheckDisabled1"><img src={avatar} /><span>Euler</span></label>
                                        </div>
                                        <div className="mr-2">
                                            <input type="checkbox" className="user-checkbox" id="customCheckDisabled2" />
                                            <label className="label-user" for="customCheckDisabled2"><img src={avatar} /><span>Euler</span></label>
                                        </div>
                                        <div className="mr-2">
                                            <input type="checkbox" className="user-checkbox" id="customCheckDisabled3" />
                                            <label className="label-user" for="customCheckDisabled3"><img src={avatar} /><span>Euler</span></label>
                                        </div>
                                        <div className="">
                                            <input type="checkbox" className="user-checkbox" id="customCheckDisabled4" />
                                            <label className="label-user" for="customCheckDisabled4"><img src={avatar} /><span>Euler</span></label>
                                        </div>
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
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav font-weight-bold">
                        <li className="room-item nav-item">
                            <a
                                onClick={() => {setRoomMenu(0)}}
                                className={`nav-link ${(roomMenu === 0) && "room-item-active"} mr-5 pb-3 pl-1 pr-1 mr-3`}
                                href="#"
                            >
                                <span className="alert-blue">
                                    {bulbs.length}
                                </span>Todos
                            </a>
                        </li>
                    {
                        rooms.map(room => (
                            <li key={room.id} className="room-item nav-item ">
                                <a onClick={() => {setRoomMenu(room.id)}} className={`nav-link ${roomMenu === room.id && "room-item-active"} mr-5 pb-3 pl-1 pr-1 mr-3`} href="#"><span className="alert-blue">{room.numBulbs}</span>{room.name}</a>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="col d-flex justify-content-end">
                    <ul className="nav">
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
