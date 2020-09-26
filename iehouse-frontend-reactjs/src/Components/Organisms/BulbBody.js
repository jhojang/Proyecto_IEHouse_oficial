import React, { useState, useContext, useEffect } from 'react'
import { Bulb } from '../Atoms/Bulb'
import { BulbTitle } from '../Molecules/BulbTitle'
import { Horary } from '../Molecules/Horary'
import { useFetchRoom } from '../../Hooks/useFetchRoom';
import { UseContext } from '../../Context/UseContext';
import { useFetchBulb } from '../../Hooks/useFetchBulb';

export default function BulbBody() {

    const { setActualPageBody } = useContext(UseContext);

    useEffect(() => {
        localStorage.setItem('PageBody', 'bulbs');
        setActualPageBody(localStorage.getItem('PageBody'));
    }, [])
    
    const [roomMenu, setRoomMenu] = useState(0);

    const { bulbs, handleListBulb, handleStateBulb, handleDeleteBulb } = useFetchBulb();
    const { rooms, handleListRoom } = useFetchRoom();

    useEffect(() => {
        handleListBulb();
        handleListRoom();
    },[])

    let iterBulbs = [];

    iterBulbs = bulbs.filter(bulb => {
        if (roomMenu === 0) {
            return bulb;
        } else {
            return bulb.room.id === roomMenu;
        }
    });

    return (
        <>
            <BulbTitle 
                roomMenu={roomMenu}
                setRoomMenu={setRoomMenu} 
                bulbs={bulbs} 
                handleListBulb={handleListBulb} 
                rooms={rooms}
            />
            <div className="main-container bg-white container-fluid">
                <div className="row p-2 pt-3">
                    <div className="col-9 d-flex flex-wrap">
                        {
                            iterBulbs.map(iterBulb => {
                                return <Bulb key={iterBulb.id} name={iterBulb.name} id={iterBulb.id} state={iterBulb.state} handleStateBulb={handleStateBulb} handleDeleteBulb={handleDeleteBulb} />
                            })
                        }
                    </div>
                    <div className="col-3 m-0 pl-0">
                        <Horary />
                    </div>
                </div>
            </div>
        </>
    )
}
