import './style.css'

function CardHab(props) {
    return(
        <div className='cardSmall'>
            <img className='imgCardSmall' src={props.source}></img>
            <p>{props.title}</p>
        </div>
    )
}

export default CardHab;