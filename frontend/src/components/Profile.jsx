import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const logout = async (e) => {
        e.preventDefault();
        const data = await axios.post('http://127.0.0.1:8000/logout/', 
            { 'refresh': localStorage.getItem('refresh_token'), },
        );
        localStorage.clear();
        axios.defaults.headers.common['Authorization'] = null;
        navigate('/login');
    }

    return(
        <div class='p-3' id='profile'>
            <h4>Привет, {localStorage.getItem('username')}</h4>
            <button type="submit" class="btn btn-primary mt-2" onClick={logout}>Выход</button>
        </div>
    );
};

export default Profile;