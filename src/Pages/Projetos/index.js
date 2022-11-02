import './style.css';
import MiniCard from './MiniCard';
import sites from '../../Data/sites';
import sistemas from '../../Data/sistemas';
import React from 'react';

function Projetos() {
    return(
        <section className='container-main-project transitionsSoft'>
               <div className='background-box-1 bg-red'></div>
               <div className='background-box-3 bg-yellow'></div>
               <div className='background-box-2 bg-green'></div>
                <h1>Alguns Projetos</h1>
                <h2>Sistemas</h2>
            <section className='container-project' >
                {sistemas.map(sistema => <MiniCard imgOne={sistema.img} rotaid={ `/sistemas/${sistema.id}` } key={ sistema.id }>{ sistema.title }</MiniCard>)}
            </section>
                <h2>Websites</h2>
            <section className='container-project' >
                {sites.map(projeto => <MiniCard imgOne={projeto.img} rotaid={`/sites/${projeto.id}`} key={ projeto.id }>{ projeto.title }</MiniCard>)}
            </section>
        </section>)
}

export default Projetos;