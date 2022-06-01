import './style.css';
import Card from './Card';

function Sobre() {
    return(
    <section className='container-sobre transitionsSoft'>
            <img className='img-perfil' src='./Assets/img/eu-github.jpg'></img>
            <Card title={'Olá, eu sou o João Guilherme'} content={`O Desenvolvedor responsável, trabalho com solucões Voltada para Web. Mineiro. Sempre buscando evolução.Confira os meus projetos:  `}></Card>
    </section>)
}

export default Sobre;