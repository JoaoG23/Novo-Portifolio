
import './style.css';
import CardSobre from './Card';

function Sobre() {
    const meuNome = 'Olá, eu sou o João Guilherme';
    const sobreMin = `O Desenvolvedor responsável, trabalho com solucões voltadas para web, bem como, Websites,
     Landingpage e muito mais. Mineiro, a mais de um ano na área de desenvolvimento,
     sempre buscando evolução. Confira alguns dos meus projetos:  `;
    return(<section className='container-sobre transitionsSoft'>
                <div className='background-box-3 bg-yellow'></div>
               <div className='background-box-2 bg-green'></div>
            <img className='img-perfil' src='./Assets/img/eu-github.jpg'></img>
            <CardSobre title={meuNome} content={sobreMin}></CardSobre>
    </section>)
}

export default Sobre;