import React from "react";
import {useNavigate} from 'react-router-dom';
import parse from 'html-react-parser';

const ReleaseItem = (props) => {

    const router = useNavigate();

    if (props.release.number % 2 != 0 || window.innerWidth < 767){
        return (
            <div className="mt-5">
                <div class="card mb-3" style={{maxWidth: 2000,}}>
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={props.release.cover} alt='...' class="img-fluid" />
                    </div>
                    <div class="col-md-7">
                        <div class="position-card-relative card-body position-absolute bottom-0 pb-0">
                            <p class="card-text mb-1"><small class="text-body-secondary">Выпуск {props.release.id}</small></p>
                            <h3 class="card-title">{parse(props.release.title)}</h3>
                            <button class='mt-1 btn btn-primary' onClick={() => router('articles/'+props.release.number)}>читать →</button>
                        </div>
                    </div>
                </div>
                </div>
                <hr className="border-3 mt-5"/>
            </div>
        )
    } else {
        return (
            <div className="mt-5">
                <div class="card mb-3" style={{maxWidth: 2000,}}>
                <div class="row g-0"> 
                    <div class="col-md-7">
                        <div class="position-card-relative card-body position-absolute bottom-0 pb-0">
                            <p class="card-text mb-1"><small class="text-body-secondary">Выпуск {props.release.id}</small></p>
                            <h3 class="card-title col-md-7">{parse(props.release.title)}</h3>
                            <button class='mt-1 btn btn-primary' onClick={() => router('articles/'+props.release.number)}>читать →</button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img src={props.release.cover} alt='...' class="img-fluid" />
                    </div>
                </div>
                </div>
                <hr className="border-3 mt-5"/>
            </div>
        )
    }
}

export default ReleaseItem;