
import './style.css';
import Button from '../../Componentes/Button';
import React from 'react';
import sistemas from '../../Data/sistemas';
import { useParams } from 'react-router-dom';
import CardApresentacaoProjeto from './Card';

function SobreSistemas() {

    const { id } = useParams();
    let sistemaFiltrado = {};
    for (let i = 0; i < sistemas.length; i++) {
        let elem = sistemas[i];
        let elementoSelecionado = elem.id;
        if (elementoSelecionado == id) {
            sistemaFiltrado = elem;

        }
    }

    const { title, img, introducao, detalhes, hiperLink, palavrachave, funcionalidades } = sistemaFiltrado;
    return (<section className='container-sobre transitionsSoft'>
        <div className='background-box-3 bg-yellow'></div>
        <div className='background-box-2 bg-green'></div>
        <CardApresentacaoProjeto>
            <div>
                <h1>{title}</h1>
                <h3>{introducao}</h3>
                <p>{detalhes}</p>
                <p>{funcionalidades}</p>
            <h1>#{palavrachave}</h1>
            </div>
            <img className='img-projeto' src={img} alt='projeto'></img>
            <Button><a href={hiperLink} target='_blank'>Clique aqui veja você mesmo ➧</a></Button>
        </CardApresentacaoProjeto>

    </section>)
}

export default SobreSistemas;