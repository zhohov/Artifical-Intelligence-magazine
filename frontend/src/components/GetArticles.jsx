import {React, useEffect, useState} from 'react';
import axios from 'axios';
import ArticleItem from './ArticleItem';
import { useParams } from 'react-router-dom';

const GetArticles = () => {
    const [articles, setState] = useState([]);
    const params = useParams();


    async function fetchArticles () {
        const response = await axios.get('http://localhost:8000/api/articles/?number=' + params.number)
        setState(response.data)
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    return (
        <div>
            <h2>Статьи</h2>
            <hr></hr>
            {articles.map((article) => 
                <ArticleItem article={article} key={article.id} />
            )}
        </div>
    );
};

export default GetArticles;