import './style.css';


function MiniCard(props) {

    return (
        <figure className='mini-card'>
            <img className='img-mini-card' src={props.imgOne} alt='img'></img>
            <a className='mask' href={props.linkOne} target='_blank'>
                <div className='nano-card'>
                    {props.children}
                </div>
            </a>
        </figure>
    )
}

export default MiniCard;