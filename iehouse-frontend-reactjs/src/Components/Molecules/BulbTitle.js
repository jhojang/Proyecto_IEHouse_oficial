import React from 'react'

export const BulbTitle = () => {
    return (
        <div className="bg-white border-bottom pl-4 pr-4 pt-4 pb-0 m-0">
            <div className="row">
                <div className="col">
                    <h1>Bombillos</h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <ul class="nav">
                        <li class="nav-item">
                            <button class="btn btn-primary ml-4" href="#">Agregar cuarto</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-primary ml-4" href="#">Agregar bombillo</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav font-weight-bold">
                        <li className="room-item nav-item ">
                            <a className="nav-link room-item-active mr-5 pb-3 pl-1 pr-1 mr-3" href="#">Todos</a>
                        </li>
                        <li className="room-item nav-item">
                            <a className="nav-link mr-5 pb-3 pl-1 pr-1 mr-3" href="#">Agregar</a>
                        </li>
                        <li className="room-item nav-item">
                            <a className="nav-link mr-5 pb-3 pl-1 pr-1 mr-3" href="#">Link</a>
                        </li>
                        <li className="room-item nav-item">
                            <a className="nav-link mr-5 pb-3 pl-1 pr-1 mr-3 disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="col d-flex justify-content-end">
                    <ul class="nav">
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
