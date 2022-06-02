import './style.css';
import BagdeVerde from '../../../Componentes/Bagdes/Bagde-verde';

function CardSobre( props ) {
    
    return(<div className='card-sobre' title={ props.title } content={ props.content }>
        <div className='container-card-sobre'>
            <span className='bol-amarela'></span>
            <BagdeVerde></BagdeVerde>
        </div>
        <div>
            <h1> { props.title } </h1>
            <p> { props.content } <a className='btn-azul'  href='#projetos'>Clique aqui</a></p>
        </div>
    </div>)
}

export default CardSobre;