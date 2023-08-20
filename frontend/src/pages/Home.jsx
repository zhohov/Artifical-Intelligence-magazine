import React, { useEffect, useState } from 'react';
import ReleaseItem from '../components/ReleaseItem';
import axios from 'axios';

const Home = () => {

    const [state, setState] = useState([]);

    async function fetchReleases () {
        
        const response = await axios.get('http://localhost:8000/api/releases/?ordering=-number', {})
        setState(response.data)
    }

    useEffect(() => {
        fetchReleases()
    }, [])
    
    return (
        <div className='container-sm px-3 px-md-5 mt-3'>
            <div class="grid text-left head">
                <div class="p-5 g-col-12">
                    <h1 class="display-6 mt-5 pt-5">Открой для себя мир <br />искусственного интеллекта с<br /><mark id='logo'>AI magazine</mark></h1>
                    <div class="bottom-0 pb-0">
                        <button type="submit" class=" mt-5 btn btn-primary">читать журнал →</button>
                    </div>      
                </div>
            </div>

            <hr className="border-3 mt-5"/>
            <div class='my-5'>
                <small>о журнале</small> <br /><br />
                <p class="lead">Погрузитесь в захватывающий мир искусственного интеллекта с AI magazine. Узнайте о последних тенденциях, открытиях и вдохновляющих примерах применения ИИ во всех сферах жизни. Станьте свидетелем прорывов и открытий, которые меняют мир. Присоединяйтесь к нам и расширьте свои границы с AI magazine!</p>
            </div>
    
            <hr className="border-3 mt-5"/>

            <div class='my-5'>
                <small>последние выпуски</small>
                {state.reverse().slice(0,2).map((release) =>
                    <ReleaseItem release={release} key={release.id} />
                )}
            </div>
        </div>
    );
};

export default Home;