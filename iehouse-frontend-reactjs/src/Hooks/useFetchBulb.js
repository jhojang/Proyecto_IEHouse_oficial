import {useState} from 'react'

export const useFetchBulb = () => {
    
    const [bulbs, setBulb] = useState([])

    const handleListBulb = () => {
        fetch("http://localhost:8080/bulbs")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setBulb(data);
        })
    }

    return {
        bulbs,
        handleListBulb
    }


}
