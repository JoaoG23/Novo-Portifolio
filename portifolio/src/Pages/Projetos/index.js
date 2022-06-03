import './style.css';
import MiniCard from './MiniCard';

function Projetos() {
    return(
        <section className='container-main-project transitionsSoft'>
               <div className='background-box-1 bg-red'></div>
               <div className='background-box-3 bg-yellow'></div>
               <div className='background-box-2 bg-green'></div>
                <h1>Alguns Projetos</h1>
            <section className='container-project'>
                <MiniCard imgOne={'./Assets/img/bike.gif'} linkOne={'https://prototypebikesgoods.netlify.app/'}>Site de Bike</MiniCard>
                <MiniCard imgOne={'./Assets/img/doceria.gif'} linkOne={'https://protypeconfeitariajg.netlify.app/'}>Site Doceira</MiniCard>
                <MiniCard imgOne={'./Assets/img/flor.gif'} linkOne={'https://protypefloriculturajg.netlify.app/'}>Site Floricultura</MiniCard>
                <MiniCard imgOne={'./Assets/img/joaoaceso.gif'}>Sistema de Controle de acesso</MiniCard>
                <MiniCard imgOne={'./Assets/img/landpage.png'}>Pagina de Captura</MiniCard>
                <MiniCard imgOne={'./Assets/img/oldsite.gif'} linkOne={'https://jgportifolio.netlify.app/'}>Site Intitucional</MiniCard>
                <MiniCard imgOne={'./Assets/img/GifRegistPeople.gif'}>Sistema de cadastro de pessoas</MiniCard>
                <MiniCard imgOne={'./Assets/img/CopaChat.gif'}>Chat Corporativo</MiniCard>
            </section>
        </section>)
}

export default Projetos;