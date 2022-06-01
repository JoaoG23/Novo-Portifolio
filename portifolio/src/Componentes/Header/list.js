import React from "react";
import { Link } from "react-router-dom";


function List(props) { 
    return (<ul className={props.styleNew} >
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/sobre'>Sobre</Link></li>
     <li><Link to='/projetos'>Projetos</Link></li>
     <li><Link to='/habilidade'>Habilidades</Link></li>
     <li><Link to='/contatos'>Contatos</Link></li>
   </ul>)
}

export default List;