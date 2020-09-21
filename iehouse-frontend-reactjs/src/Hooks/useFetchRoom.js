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

    return {
        rooms,
        handleListRoom
    }

}
