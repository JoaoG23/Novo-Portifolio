import './style.css';

function CardApresentacaoProjeto(props) {

    return (<div className='card-apresentacao-projeto'>
        <div className='container-card-apresentacao-projeto'>
            {props.children}
        </div>
    </div>)
}

export default CardApresentacaoProjeto;