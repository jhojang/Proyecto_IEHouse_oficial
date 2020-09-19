import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Select from 'react-select';
import bulbVector from '../../svg/bulbVector.svg';
import avatar from '../../img/avatar.jpg';

export const BulbTitle = () => {

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

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
                    <ul class="nav">
                        <li class="nav-item">
                            <button class="btn btn-primary ml-4" href="#">Agregar cuarto</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={handleOpenModal} class="btn btn-primary ml-4" href="#">Agregar bombillo</button>
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
                                    <div class="form-group">
                                        <label for="disabledTextInput">Ingresa el nombre del bombillo</label>
                                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre" />
                                    </div>
                                    <div class="form-group">
                                        <label for="disabledSelect">Cuarto</label>
                                        <Select defaultValue={options[0]} options={options} />
                                    </div>
                                    <p className="mb-0">Permisos</p>
                                    <div className="user-checkbox-container pt-3 w-100 d-flex flex-wrap overflow-auto">
                                        <div class="mr-2">
                                            <input type="checkbox" class="user-checkbox" id="customCheckDisabled1" />
                                            <label class="label-user" for="customCheckDisabled1"><img src={avatar} /><span>Euler</span></label>
                                        </div>
                                        <div class="mr-2">
                                            <input type="checkbox" class="user-checkbox" id="customCheckDisabled2" />
                                            <label class="label-user" for="customCheckDisabled2"><img src={avatar} /><span>Euler</span></label>
                                        </div>
                                        <div class="mr-2">
                                            <input type="checkbox" class="user-checkbox" id="customCheckDisabled3" />
                                            <label class="label-user" for="customCheckDisabled3"><img src={avatar} /><span>Euler</span></label>
                                        </div>
                                        <div class="">
                                            <input type="checkbox" class="user-checkbox" id="customCheckDisabled4" />
                                            <label class="label-user" for="customCheckDisabled4"><img src={avatar} /><span>Euler</span></label>
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value="Enviar" />
                                </form>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={handleCloseModal} class="btn primary bg-white pl-4 pr-4" href="#">Cerrar</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav font-weight-bold">
                        <li className="room-item nav-item ">
                            <a className="nav-link room-item-active mr-5 pb-3 pl-1 pr-1 mr-3" href="#">Todos</a>
                        </li>
                        <li className="room-item nav-item">
                            <a className="nav-link mr-5 pb-3 pl-1 pr-1 mr-3" href="#">Agregar</a>
                        </li>
                        <li className="room-item nav-item">
                            <a className="nav-link mr-5 pb-3 pl-1 pr-1 mr-3" href="#">Link</a>
                        </li>
                        <li className="room-item nav-item">
                            <a className="nav-link mr-5 pb-3 pl-1 pr-1 mr-3 disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="col d-flex justify-content-end">
                    <ul class="nav">
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
