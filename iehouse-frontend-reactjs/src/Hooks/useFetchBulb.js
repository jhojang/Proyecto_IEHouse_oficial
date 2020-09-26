import {useState} from 'react'

export const useFetchBulb = () => {
    
    const [bulbs, setBulb] = useState([])

    const url = "http://localhost:8080/bulbs/";

    const handleListBulb = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setBulb(data);
        })
    }

    const handleCreateBulb = (bulbName, users, idRoom) => {
        const newBulb = {
            name: bulbName,
            state: false,
            user: users
        }

        fetch(url + idRoom, {
            method: 'POST',
            body: JSON.stringify(newBulb),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            handleListBulb();
            console.log(data);
        })
    }

    const handleStateBulb = (id, state) => {
        const newState = {
            state
        }

        fetch(url+id, {
            method: 'PUT',
            body: JSON.stringify(newState),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            handleListBulb();
        })

    }

    const handleDeleteBulb = (idBulb) => {
        fetch(url + idBulb, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(data => {
            handleListBulb();
        })
    }

    return {
        bulbs,
        handleListBulb,
        handleCreateBulb,
        handleStateBulb,
        handleDeleteBulb
    }


}
