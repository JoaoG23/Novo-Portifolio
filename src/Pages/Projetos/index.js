import './style.css';
import MiniCard from './MiniCard';
import projetos from '../../Data/projetos';
import { prettyDOM } from '@testing-library/react';

function Projetos() {
    return(
        <section className='container-main-project transitionsSoft'>
               <div className='background-box-1 bg-red'></div>
               <div className='background-box-3 bg-yellow'></div>
               <div className='background-box-2 bg-green'></div>
                <h1>Alguns Projetos</h1>
            <section className='container-project' >
                {projetos.map(projeto => <MiniCard imgOne={projeto.img} linkOne={ projeto.hiperLink } key={ projeto.id }>{ projeto.title }</MiniCard>)}
            </section>
        </section>)
}

export default Projetos;