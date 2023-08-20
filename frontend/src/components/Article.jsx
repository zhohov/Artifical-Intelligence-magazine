import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const Article = () => {
    const params = useParams();
    const [state, setState] = useState([]);

    const getArticle = async () => {
        const apiURL = 'http://localhost:8000/api/articles/' + params.article_number + '/';
        const response = await axios.get(apiURL);
        setState(response.data)
    }

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <div className='container-sm px-3 px-md-5 mt-3'>
            <h2>{state.title}</h2>
            <hr />
            <p>{parse(`${state.text}`)}</p>
            <p>{state.date}</p>
        </div>
    );
};

export default Article;