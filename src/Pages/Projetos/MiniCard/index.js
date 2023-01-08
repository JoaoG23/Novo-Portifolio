import React , {useState}from 'react';

import './style.css';

function MiniCard(props) {
    return (
        <figure className='mini-card'>
            <img className='img-mini-card' src={props.imgOne} alt='img' ></img>
            <a className='mask' href={props.linkOne} target='_blank' rel="noreferrer">
                <div className='nano-card'>
                    <h3>{props.children}</h3>
            <h4>Clique aqui é confira!</h4>
                </div>
            </a>
        </figure>
    )
}

export default MiniCard;