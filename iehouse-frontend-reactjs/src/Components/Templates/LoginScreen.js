import React from 'react'

export const LoginScreen = () => {
    return (
        <div className="bg-dark">
            <h2>LoginScreen</h2>
            <form className="col-4">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Apellido" />
                    </div>
                </div>
            </form>
        </div>
    )
}
