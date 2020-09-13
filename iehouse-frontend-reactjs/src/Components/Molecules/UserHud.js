import React from 'react';
import avatar from '../../img/avatar.jpg';

export const UserHud = () => {
    return (
        <>
            <div className="user-hud d-flex align-items-center justify-content-center flex-column">
                <img src={ avatar } />
                <h6>Nombre usuario</h6>
                <p>Roles</p>
            </div>
        </>
    )
}
