import React, {useState} from 'react'

export const useUser = () => {
    
    const [user, setUser] = useState({
        user: {},
        session: false
    });

    return {
        user: user,
        setUser: setUser
    }

}
