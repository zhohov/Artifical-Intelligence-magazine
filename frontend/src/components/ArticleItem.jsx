import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ArticleItem = (props) => {
    const router = useNavigate();

    return(
        <div>
            <h2>{props.article.title}</h2>
            <p>{props.article.date}</p>
            <button class='mt-1 btn btn-primary' onClick={() => router('' + props.article.id)}>Read Article</button>
        </div>
    )
}

export default ArticleItem;