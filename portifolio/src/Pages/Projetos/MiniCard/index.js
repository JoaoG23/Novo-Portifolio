import './style.css';

function MiniCard( props ) {

    return(
    <figure className='mini-card'>
        <img className='img-mini-card' src={props.imgOne} alt='img'></img>
        <figcaptiom className='nano-card'>{ props.children }</figcaptiom>
    </figure>)
}

export default MiniCard;