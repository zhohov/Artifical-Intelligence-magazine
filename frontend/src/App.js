import React from 'react';
import Releases from './pages/Releases';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Article from './components/Article'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route exact path='/releases' element={<Releases />}></Route>
                <Route exact path='/releases/articles/:number' element={<Articles />}></Route>
                <Route exact path='/releases/articles/:number/:article_number' element={<Article />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/registration' element={<Registration />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
