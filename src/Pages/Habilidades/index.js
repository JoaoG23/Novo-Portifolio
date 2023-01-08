import React from 'react';
import './style.css';
import CardHab from './CardHab';
import BagdeVerde from '../../Componentes/Bagdes/Bagde-verde';

function Habilidades() {
    return (
        <main className='container-habilidades transitionsSoft'>
            <div className='background-box-3 bg-green'></div>
            <div className='background-box-4 bg-green'></div>
            <section className='title-habilidades'>
                <h1>Algumas Habilidades</h1>
                <h1>e Tecnologias</h1>
            </section>
            <div className='list-habilidades'>
                <section className='learned'>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' title='HTML'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' title='CSS'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' title='Javascript'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' title='Bootstrap'></CardHab>
                    <CardHab source='./Assets/icons/materialize.svg' title='Materialize'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' title='NodeJs'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' title='Mysql'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' title='MongoDB'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' title='PostgresSQL'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' title='React'></CardHab>
                </section>
                <BagdeVerde>Em aprendizado</BagdeVerde>
                <section className='unlearned'>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' title='TypeScript'></CardHab>
                    <CardHab source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' title='Java'></CardHab>
                </section>
            </div>
        </main>)
}

export default Habilidades;