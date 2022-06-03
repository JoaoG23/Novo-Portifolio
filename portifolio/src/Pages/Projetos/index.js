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
                <MiniCard imgOne={'./Assets/img/bike.gif'} linkOne={'https://prototypebikesgoods.netlify.app/'}>Loja de Bicicletas</MiniCard>
                <MiniCard imgOne={'./Assets/img/doceria.gif'} linkOne={'https://protypeconfeitariajg.netlify.app/'}>Uma Confeitaria</MiniCard>
                <MiniCard imgOne={'./Assets/img/flor.gif'} linkOne={'https://protypefloriculturajg.netlify.app/'}>Uma floricultura</MiniCard>
                <MiniCard imgOne={'./Assets/img/landpage.png'}  linkOne={'https://jgpagina-de-captura.netlify.app'}>Página de Captura</MiniCard>
                <MiniCard imgOne={'./Assets/img/oldsite.gif'} linkOne={'https://jgportifolio.netlify.app/'}>Site Institucional</MiniCard>
                <MiniCard imgOne={'./Assets/img/catalogo.gif'} linkOne={'https://protypelojademoveisjg.netlify.app'}>Loja de Móveis</MiniCard>
                <MiniCard imgOne={'./Assets/img/CopaChat.gif'}>Chat Corporativo</MiniCard>
            </section>
        </section>)
}

export default Projetos;