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

    return {
        bulbs,
        handleListBulb,
        handleCreateBulb
    }


}
