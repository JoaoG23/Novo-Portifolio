import './style.css';

function Card( props ) {
    
    return(<div className='card' title={ props.title } content={ props.content }>
        <div className='container-card'>
            <span className='bol-amarela'></span>
            <span className='bagde-verde'></span>
        </div>
        <div>
            <h1> { props.title } </h1>
            <p> { props.content } <a className='btn-azul'  href='#projetos'>Clique aqui</a></p>
        </div>
    </div>)
}

export default Card;