import React from 'react'
import { Modal } from 'react-bootstrap';
import Select from 'react-select';
import bulbVector from '../../svg/bulbVector.svg';
import avatar from '../../img/avatar.jpg';

export const ModalWindow = ({showModal, handleCloseModal}) => {
    return (
        <Modal className="modal modal-bulb" show={true} onHide={handleCloseModal}>
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
    )
}
