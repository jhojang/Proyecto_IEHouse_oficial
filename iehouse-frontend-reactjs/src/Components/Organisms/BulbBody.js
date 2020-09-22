import React, { useState, useContext } from 'react'
import { Bulb } from '../Atoms/Bulb'
import { BulbTitle } from '../Molecules/BulbTitle'
import { Horary } from '../Molecules/Horary'
// import { useFetchBulb } from '../../Hooks/useFetchBulb';
// import { useFetchRoom } from '../../Hooks/useFetchRoom';
import { BulbBodyContext } from '../../Context/BulbBodyContext';
import { UseContext } from '../../Context/UseContext';

export default function BulbBody() {

    const { bulbs, rooms, handleListBulb, handleListRoom } = useContext(UseContext);
    const [roomMenu, setRoomMenu] = useState(0);

    let iterBulbs = [];

    iterBulbs = bulbs.filter(bulb => {
        if (roomMenu === 0) {
            return bulb;
        } else {
            return bulb.room.id === roomMenu;
        }
    });

    console.log(iterBulbs);

    return (
        <>
        <BulbBodyContext.Provider value={{bulbs, rooms, handleListBulb, handleListRoom}}>
            <BulbTitle roomMenu={roomMenu} setRoomMenu={setRoomMenu} />
            <div className="main-container bg-white container-fluid">
                <div className="row p-2 pt-3">
                    <div className="col-9 d-flex flex-wrap">
                        {
                            iterBulbs.map(iterBulb => {
                                return <Bulb key={iterBulb.id} name={iterBulb.name} />
                            })
                        }
                    </div>
                    <div className="col-3 m-0 pl-0">
                        <Horary />
                    </div>
                </div>
            </div>
        </BulbBodyContext.Provider>
        </>
    )
}
