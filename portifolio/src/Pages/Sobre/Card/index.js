import './style.css';
import BagdeVerde from '../../../Componentes/Bagdes/Bagde-verde';

function CardSobre( props ) {
    
    return(<div className='card-sobre' title={ props.title } content={ props.content }>
        <div className='container-card-sobre'>
            <span className='bol-amarela'></span>
            <BagdeVerde></BagdeVerde>
        </div>
            <h1> { props.title } </h1>
            <p> { props.content }</p>
             <a className='btn-azul'  href='./projetos'>Clique aqui</a>
    </div>)
}

export default CardSobre;