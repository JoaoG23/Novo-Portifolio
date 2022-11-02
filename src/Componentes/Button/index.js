import './style.css';
const Button = (props) => {
    return (<button className='btn-projeto'>
        {props.children}
    </button>)
}
export default Button;