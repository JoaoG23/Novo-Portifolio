import React , { useState } from 'react'
import List from "./list"

import './style.css';

function Header(props) {


    const [ show, setShow ] = useState(false);


    function hideSidebar() {
        setShow(false);
    }
 
    function showSidebar() {
        setShow(true);
    }
 
    return(
    <header className='header'>
        <img src='./Assets/icons/minilogo.svg'></img>
            <button className='btn-mobile' onClick={showSidebar} >☰</button>
            <List links={props.links} styleNew='list' ></List>
            
            <div className={ show ? 'menu-mobile' : 'menu-mobile hide'}>
                <List links={props.links} styleNew='list-mobile' ></List>
                <button onClick={hideSidebar} className='sair-mobile'>X</button>
            </div>
        </header>)
}

export default Header;