import React from "react";
import { Link } from "react-router-dom";


function List(props) { 
    const listLinks = props.links.map((link, index)  => <li key={index}><Link to={`/${link}`}>{link}</Link></li>); // Coloque o funcao dentro de um variavel
    return (<ul className={props.styleNew} >
      {listLinks}
   </ul>)
}

export default List;