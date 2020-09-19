import React from 'react';

export const TitleCard = ({title, icon, background = 'bg-primary'}) => {
    return (
        <div class={`card-header ${background} text-white border-0 d-flex justify-content-between align-items-center pr-0 pt-0 pb-0`}>
            <div>{title}</div>
            <div className="header-icon d-flex justify-content-center align-items-center">{icon}</div>
        </div>
    )
}
