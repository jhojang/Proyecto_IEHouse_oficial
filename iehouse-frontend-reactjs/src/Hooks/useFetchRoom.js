import { useState } from 'react'

export const useFetchRoom = () => {
    
    const [rooms, setRooms] = useState([]);

    const url = "http://localhost:8080/rooms/";

    const handleListRoom = () => {

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setRooms(data);
        })

    }

    const handleAddRoom = (room) => {

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(room),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            handleListRoom();
        })

    }

    const handleDeleteRoom = (idRoom) => {
        fetch(url + idRoom, {
            method: "DELETE"
        })
        .then(data => {
            handleListRoom();
        })
    }

    const handleUpdateRoom = (room, idRoom) => {
        fetch(url + idRoom, {
            method: 'PUT',
            body: JSON.stringify(room),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            handleListRoom();
        })
    }

    return {
        rooms,
        handleListRoom,
        handleAddRoom,
        handleDeleteRoom,
        handleUpdateRoom
    }

}
