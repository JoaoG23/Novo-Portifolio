import List from "./list"
import ButtonMenuMobile from "../Mobile/Button";
import './style.css';

function Header(props) {

    return(<header className='header'>
        <img src='./Assets/icons/minilogo.svg'></img>
            <ButtonMenuMobile></ButtonMenuMobile>
            <div>
                <List links={props.links} styleNew='list' ></List>
            </div>
            <div className='menu-mobile'>
                <List links={props.links} styleNew='list-mobile' ></List>
                <button className='sair-mobile'>X</button>
            </div>
        </header>)
}

export default Header;