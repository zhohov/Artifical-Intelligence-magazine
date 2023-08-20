import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArticlePage from '../components/ArticlePage';

const GetArticlePage = () => {
    const [state, setState] = useState();
    const params = useParams();

    useEffect(() => {
        const apiURL = 'http://localhost:8000/api/articles/' + params.article_number;
        axios.get(apiURL).then((resp) => {
            const article = resp.data;
            setState(article);
            alert(state)
        });
    }, []);


    return (
        <div>
            <h1>{params.article_number}</h1>
            <div>
            </div>
        </div>
    );
};

export default GetArticlePage;