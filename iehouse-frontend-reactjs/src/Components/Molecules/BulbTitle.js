import React, { useState, useEffect } from 'react'
import { ModalAddRoom } from './ModalAddRoom';
import { ModalEditRoom } from './ModalEditRoom';
import { useFetchRoom } from '../../Hooks/useFetchRoom';

export const BulbTitle = ({roomMenu, setRoomMenu, bulbs, handleListBulb}) => {

    const {rooms, handleListRoom, handleAddRoom, handleDeleteRoom} = useFetchRoom();

    useEffect(() => {
        handleListRoom();
    }, [])

    const [showModal, setShowModal] = useState({
        type: 'none',
        show: false
    });

    const handleOpenModal = (type) => {
        setShowModal({
            type: type,
            show: true
        });
    }

    const handleCloseModal = () => {
        setShowModal({
            type: 'none',
            show: false
        });
        handleListBulb();
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
                            <button className="btn btn-primary ml-4" onClick={() => handleOpenModal('addRoom')} href="#">Agregar cuarto</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleOpenModal} className="btn btn-primary ml-4" href="#">Agregar bombillo</button>
                        </li>
                    </ul>
                    {
                        (showModal.show === true) && (
                            (showModal.type === 'addRoom' && (
                                <ModalAddRoom showM={showModal.show} handleCloseModal={handleCloseModal} handleAddRoom={handleAddRoom} />
                            ))
                        )
                    }
                    {
                        (showModal.show === true) && (
                            (showModal.type === 'editRooms' && (
                                <ModalEditRoom showM={showModal.show} handleCloseModal={handleCloseModal} handleAddRoom={handleAddRoom} handleDeleteRoom={handleDeleteRoom} rooms={rooms} />
                            ))
                        )
                    }
                </div>
            </div>
            <div className="row">
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
                    {
                        (rooms.length > 0) && (
                            <div className="p-2">
                                <button className="btn btn-primary" onClick={() => (handleOpenModal('editRooms'))} >Editar</button>
                            </div>
                        )
                    }
                    
                    
            </div>
        </div>
    )
}
