
import './style.css';
import CardSobre from './Card';

function Sobre() {
    return(<section className='container-sobre transitionsSoft'>
                <div className='background-box-3 bg-yellow'></div>
               <div className='background-box-2 bg-green'></div>
            <img className='img-perfil' src='./Assets/img/eu-github.jpg'></img>
            <CardSobre title={'Olá, eu sou o João Guilherme'} content={`O Desenvolvedor responsável, trabalho com solucões Voltada para Web. Mineiro. Sempre buscando evolução.Confira os meus projetos:  `}></CardSobre>
    </section>)
}

export default Sobre;