
import './style.css';
import Button from '../../Componentes/Button';
import React from 'react';
import sites from '../../Data/sites';
import { useParams } from 'react-router-dom';
import CardApresentacaoProjeto from './Card';

function SobreSites() {

    const { id } = useParams();
    let siteFiltrado = {};
    for (let i = 0; i < sites.length; i++) {
        let elem = sites[i];
        let elementoSelecionado = elem.id;
        if (elementoSelecionado == id) {
            siteFiltrado = elem;

        }
    }

    const { title, img, introducao, detalhes, hiperLink, palavrachave } = siteFiltrado;

    return (<section className='container-sobre transitionsSoft'>
        <div className='background-box-3 bg-yellow'></div>
        <div className='background-box-2 bg-green'></div>
        <CardApresentacaoProjeto>
            <div>
                <h1>{title}</h1>
                <h3>{introducao}</h3>
                <p>{detalhes}</p>
            <h1>#{palavrachave}</h1>
            </div>
            <img className='img-projeto' src={img} alt='projeto'></img>
            <Button><a href={hiperLink} target='_blank'>Clique aqui veja você mesmo ➧</a></Button>
        </CardApresentacaoProjeto>

    </section>)
}

export default SobreSites;