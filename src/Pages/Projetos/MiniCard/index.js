import React , {useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';

function MiniCard(props) {
    const navigate = useNavigate();

    // const toPageAbout = (id) => {
    //     navigate(`/projetos/${props.id}`)
    // }
    return (
        <figure className='mini-card'>
            <img className='img-mini-card' src={props.imgOne} alt='img'></img>
            <Link className='mask' to={props.rotaid}>
                <div className='nano-card'>
                    <h3>{props.children}</h3>
            <h4>Clique aqui é confira!</h4>
                </div>
            </Link>
        </figure>
    )
}

export default MiniCard;