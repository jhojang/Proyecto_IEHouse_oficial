import { useState } from 'react'

export const useFetchRoom = () => {
    
    const [rooms, setRooms] = useState([]);

    const handleListRoom = () => {

        fetch("http://localhost:8080/rooms/")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setRooms(data);
        })

    }

    const handleAddRoom = (room) => {

        fetch("http://localhost:8080/rooms", {
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

    return {
        rooms,
        handleListRoom,
        handleAddRoom
    }

}
