import {useState} from 'react'

export const useFetchBulb = () => {
    
    const [bulbs, setBulb] = useState([])

    const [singleBulb, setSingleBulb] = useState({})

    const url = "http://localhost:8080/bulbs/";

    const handleListBulb = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setBulb(data);
        })
    }

    const handleGetBulbById = (idBulb) => {
        fetch(url + idBulb)
        .then(resp => resp.json())
        .then(data => {
            setSingleBulb(data);
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


    const handleUpdateBulb = (bulbName, users, idBulb, idRoom) => {
        const updatedBulb = {
            name: bulbName,
            user: users
        }

        console.log(url + "idBulb/" + idBulb + "/idRoom/" + idRoom);

        fetch(url + "idBulb/" + idBulb + "/idRoom/" + idRoom, {
            method: 'PUT',
            body: JSON.stringify(updatedBulb),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(data => {
            handleListBulb();
            console.log(data);
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
        singleBulb,
        handleListBulb,
        handleGetBulbById,
        handleCreateBulb,
        handleUpdateBulb,
        handleStateBulb,
        handleDeleteBulb
    }


}
