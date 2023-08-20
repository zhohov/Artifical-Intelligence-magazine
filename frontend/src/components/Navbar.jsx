import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Profile from './Profile';

const Navbar = () => {
    const [data, setData] = useState(0);

    const refreshComponent = () => {
        setData(data + 1);
    }

    useEffect(() => {
        if (localStorage.getItem('username') !== null) {
            const login_block = document.getElementById('login_block');
            login_block.classList.add('hidden')

            const profile_block = document.getElementById('profile');
            profile_block.classList.remove('hidden')

        } else {
            const login_block = document.getElementById('login_block');
            login_block.classList.remove('hidden')

            const profile_block = document.getElementById('profile');
            profile_block.classList.add('hidden')
        }
    }, [data]);

    return (
        
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container px-md-5">
                <Link class="navbar-brand" to='/'>AI magazine</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-theme="dark" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" data-bs-theme="dark">
                    <ul class="navbar-nav me-auto mb-0 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to='/'>главная</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/releases/'>журнал</Link>
                        </li>
                    </ul>

                    <div class="dropdown">
                        <button onClick={refreshComponent} class="profile-toggler" type="button" data-bs-theme="dark" id='profile-button' data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="navbar-icon fa-solid fa-user" />
                        </button>
                        <ul class="p-3 dropdown-menu dropdown-menu-end">
                            <div className='d-flex ms-lg-2' id='login_block'>
                                <button type="button" class="m-1 btn btn-dark">
                                    <Link class="nav-link" to='/login'>Вход</Link>
                                </button>
                                <button type="button" class="m-1 btn btn-primary">
                                    <Link class="nav-link" to='/registration'>Регистрация</Link>
                                </button>
                            </div>
                            <Profile />
                        </ul>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;