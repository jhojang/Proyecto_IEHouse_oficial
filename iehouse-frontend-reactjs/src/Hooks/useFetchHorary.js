import { useState } from 'react'

export const useFetchHorary = () => {
    
    const [horarys, setHorarys] = useState([])

    const handleListHorary = () => {
        fetch('http://localhost:8000/horary-api/horary', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setHorarys(data);
        })
    }

    const handleCreateHorary = (starts_at, id_bombillo) => {
        console.log(starts_at, id_bombillo);
        const newHorary = {
            starts_at,
            id_bombillo
        }
        fetch('http://localhost:8000/horary-api/horary', {
            method: 'POST',
            body: JSON.stringify(newHorary),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            handleListHorary();
        })

    }

    const handleDeleteHorary = (id) => {
        fetch('http://localhost:8000/horary-api/horary/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => {
            handleListHorary();
        })
    }

    return {
        horarys,
        handleCreateHorary,
        handleListHorary,
        handleDeleteHorary
    }

}
