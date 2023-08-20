import React, { useEffect } from 'react';
import GetReleases from '../components/GetReleases';
import { useNavigate } from 'react-router-dom';

const Releases = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/login')
        }
    }, []);
    
    return (
        <div class='container-sm px-3 px-md-5 mt-3'>
            <h2>выпуски журнала</h2>
            <hr></hr>
            <GetReleases/>
        </div>
    );
};

export default Releases;