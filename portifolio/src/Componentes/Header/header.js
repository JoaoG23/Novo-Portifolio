import List from "./list"

function Header(props) {
    return(<header className='header azul'>
        <img src='./Assets/icons/Logo.svg'></img>
            <div className='list'>
                <List links={props.links} ></List>
            </div>
        </header>)
}

export default Header;