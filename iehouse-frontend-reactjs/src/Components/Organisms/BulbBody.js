import React, { useEffect, useState } from 'react'
import { Bulb } from '../Atoms/Bulb'
import { BulbTitle } from '../Molecules/BulbTitle'
import { Horary } from '../Molecules/Horary'
import { useFetchBulb } from '../../Hooks/useFetchBulb';
import { useFetchRoom } from '../../Hooks/useFetchRoom';
import { BulbBodyContext } from '../../Context/BulbBodyContext';

export default function BulbBody() {

    const { rooms, handleListRoom } = useFetchRoom();
    const { bulbs, handleListBulb } = useFetchBulb();
    const [bulbMenu, setBulbMenu] = useState(0);

    let iterBulbs = [];

    useEffect(() => {
        handleListBulb();
    }, [])

    iterBulbs = bulbs.filter(bulb => {
        if (bulbMenu === 0) {
            return bulb;
        } else {
            return bulb.room.id === bulbMenu;
        }
    });

    console.log(iterBulbs);

    return (
        <>
        <BulbBodyContext.Provider value={{bulbs, rooms, bulbMenu, handleListBulb, handleListRoom, setBulbMenu}}>
            <BulbTitle />
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
