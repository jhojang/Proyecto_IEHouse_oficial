import { useState } from 'react'

export const useFetchInform = () => {
    
    const [informs, setInforms] = useState([])

    const url = 'http://localhost:8000/inform-api/inform'

    const handleListInform = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setInforms(data);
        })
    }

    return {
        informs,
        handleListInform
    }

}
