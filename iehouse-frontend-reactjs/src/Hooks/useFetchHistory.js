import { useState } from 'react'

export const useFetchHistory = () => {
    
    const [historys, setHistorys] = useState([]);

    const handleListHistory = () => {

    }

    const handleCreateHistory = (id, state) => {
        console.log('CreateHistory: Se cambio el estado ' + id + " a estado " + state );
    }

    const handleUpdateHistory = (id, state) => {
        console.log('UpdateHistory: Se cambio el estado ' + id + " a estado " + state );
    }

    return {
        historys,
        handleListHistory,
        handleCreateHistory,
        handleUpdateHistory
    }

}
