import './style.css';
import React from 'react';
import { Link } from "react-router-dom";


function MiniCard(props) {

    return (
        <figure className='mini-card'>
            <img className='img-mini-card' src={props.imgOne} alt='img'></img>
            <a className='mask' href={props.linkOne}>
                <div className='nano-card'>
                    {props.children}
                </div>
            </a>
        </figure>
    )
}

export default MiniCard;