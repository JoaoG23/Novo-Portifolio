function List(props) { 
    const listLinks = props.links.map((link, index)  => <li key={index}>{link}</li>); // Coloque o funcao dentro de um variavel
    return (<ul className='list'>
      {listLinks}
   </ul>)
}

export default List;