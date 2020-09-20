import React, { useEffect } from 'react'
import { Bulb } from '../Atoms/Bulb'
import { BulbTitle } from '../Molecules/BulbTitle'
import { Horary } from '../Molecules/Horary'
import { useFetchBulb } from '../../Hooks/useFetchBulb';

export default function BulbBody() {

    const { bulb, handleList } = useFetchBulb();

    useEffect(() => {
        handleList();
    }, [])

    return (
        <>
        <BulbTitle />
        <div className="main-container bg-white container-fluid">
            <div className="row p-2 pt-3">
                <div className="col-9 d-flex flex-wrap">
                    {
                        bulb.map(bulb => {
                            return <Bulb key={bulb.id} name={bulb.name} />
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
