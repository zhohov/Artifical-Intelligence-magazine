import axios from "axios";

let refresh = false;

axios.interceptors.response.use( response => response, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true;
        const response = await axios.post('http://localhost:8000/auth/jwt/refresh', 
        {refresh: localStorage.getItem('refresh_token')});

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
            localStorage.setItem('access_token', response.data.access);
            return axios(error.config);
        };      
    }
    refresh = false;
    return error;
});