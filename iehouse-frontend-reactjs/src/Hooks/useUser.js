import React, {useState} from 'react'

export const useUser = () => {
    
    const [user, setUser] = useState({});

    return {
        user: user,
        setUser: setUser
    }

}
