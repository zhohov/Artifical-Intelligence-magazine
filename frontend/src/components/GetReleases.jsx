import {React, useState, useEffect} from 'react';
import axios from 'axios';
import ReleaseItem from './ReleaseItem';


const GetReleases = () => {
    const [state, setState] = useState([]);

    async function fetchReleases () {
        
        const response = await axios.get('http://localhost:8000/api/releases/?ordering=-number', {})
        setState(response.data)
    }

    useEffect(() => {
        fetchReleases()
    }, [])

    return (
        <div>
            {state.map((release) =>
                <ReleaseItem release={release} key={release.id} />
            )}
        </div>
    )
}

export default GetReleases;