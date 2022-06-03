import React , { useEffect, useState } from 'react';
import List from "./list"
import { useLocation } from 'react-router-dom';

import './style.css';

function Header() {
    const [ show, setShow ] = useState(false);

    const location = useLocation();


    
    function returnHomePage() {
        console.log(location.pathname);
    }
 
    function hideSidebar() {
        setShow(false);
    }
 
    function showSidebar() {
        setShow(true);
    }

    function exitWhenChangePage(elem) {
        let isClicked = elem.target;
        console.log(isClicked)
        if (isClicked) {
            setShow(false);
        }

    }
 
    return(
    <header className='header' >
        <img src='./Assets/icons/minilogo.svg'></img>
            <button className='btn-mobile' onClick={showSidebar} >☰</button>
            <List styleNew='list' ></List>
            
            <div className={ show ? 'menu-mobile' : 'menu-mobile hide'}  onClick={exitWhenChangePage}>
                <List styleNew='list-mobile'  ></List>
                <button onClick={hideSidebar} className='sair-mobile'>X</button>
            </div>
        </header>

        )
}

export default Header;