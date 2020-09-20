import {useState} from 'react'

export const useFetchBulb = () => {
    
    const [bulb, setBulb] = useState([])

    const handleList = () => {
        fetch("http://localhost:8080/bulbs")
        .then(resp => resp.json())
        .then(data => {
            setBulb(data);
        })
    }

    return {
        bulb: bulb,
        handleList: handleList
    }


}
