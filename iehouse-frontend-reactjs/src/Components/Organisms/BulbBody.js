import React from 'react'
import { Bulb } from '../Atoms/Bulb'
import { BulbTitle } from '../Molecules/BulbTitle'
import { Horary } from '../Molecules/Horary'

export default function BulbBody() {
    return (
        <>
        <BulbTitle />
        <div className="main-container bg-white container-fluid">
            <div className="row p-2 pt-3">
                <div className="col-9 d-flex flex-wrap">
                    <Bulb />
                    <Bulb />
                    <Bulb />
                    <Bulb />
                    <Bulb />
                    <Bulb />
                </div>
                <div className="col-3 m-0 pl-0">
                    <Horary />
                </div>
            </div>
        </div>
        </>
    )
}
