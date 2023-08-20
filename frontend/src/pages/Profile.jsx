import { React, useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState([]);

    const getUser = async () => {
        setMessage(localStorage.getItem('username'))
    }

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/login')
        } else {
            getUser();
        }
    }, []);

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
        <div>
            <h1>Hello, {message}</h1>
            <button type="submit" class="btn btn-primary" onClick={logout}>Submit</button>
        </div>
    );
};

export default Profile;