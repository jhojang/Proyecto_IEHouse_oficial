import React from 'react'

export const UserCardCheckbox = ({user, avatar, handleInputCheckbox, checkboxValue}) => {

    console.log(checkboxValue);

    let flag = false;
    checkboxValue.forEach(item => {
        if (user.id === parseInt(item.id)) {
            flag = true;
        } 
    })

    return (
        <>
            <div class="mr-2">
                <input 
                    type="checkbox"
                    name="id"
                    checked={flag}
                    onChange={handleInputCheckbox}
                    value={user.id} className="user-checkbox" id={`customCheckDisabled${user.id}`} />
                <label className="label-user" htmlFor={`customCheckDisabled${user.id}`}><img src={avatar} /><span>{user.username}</span></label>
            </div>
        </>
    )
}
