import { useState } from 'react'

export const useLoggedIn = () => {
    
    const [loggedIn, setLoggedIn] = useState();

    return {
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn
    }

}
