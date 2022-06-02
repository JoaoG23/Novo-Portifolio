import './style.css';

function Contatos() {
    return(
    <main className='container-contatos transitionsSoft'>
        <div className='background-box-2 bg-green'></div>
        <div className='background-box-3 bg-green'></div>
        <img src='./Assets/icons/contact_img.svg' alt='tel'></img>
    <section className='card-contatos'>
        <h1 className='font-blue'>Contatos</h1>
        <div>
            <img src='./Assets/icons/github.svg' alt='git'></img>
            <img src='./Assets/icons/linkedin.svg' alt='link'></img>
            <img src='./Assets/icons/whatsapp.svg' alt='what'></img>
        </div>
        <ul className='contatos'>
            <li>Telefone: (31) 9999-9999</li>
            <li>Email: jguilhermeempresarial@outlook.com</li>
            <li>Muito obrigado pela atenção</li>
        </ul>
        <footer>© Criado por joão Guilherme</footer>
    </section> 
    </main>)
}

export default Contatos;