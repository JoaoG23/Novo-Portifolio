import './style.css';

function Contatos() {
    return(
    <main className='containe-contatos transitionsSoft'>
        <img src='./Assets/icons/contact_img.svg'></img>
    <section className='card-contatos'>
        <h1>Contatos</h1>
        <div>
            <img src='./Assets/icons/github.svg'></img>
            <img src='./Assets/icons/linkedin.svg'></img>
            <img src='./Assets/icons/whatsapp.svg'></img>
        </div>
        <ul className='contatos'>
            <li>Telefone: (31) 9999-9999</li>
            <li>Email: jguilhermeempresarial@outlook.com</li>
            <li>Muito obrigado pela atenção</li>
        </ul>
        <footer className='direitos'>Criado por joão Guilherme</footer>
    </section> 
    </main>)
}

export default Contatos;