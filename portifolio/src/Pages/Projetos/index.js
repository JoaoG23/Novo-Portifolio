import './style.css';
import MiniCard from './MiniCard';

function Projetos() {
    return(
        <section className='container transitionsSoft'>
           <section>
               <div className='background-box-1 bg-red'></div>
               <div className='background-box-3 bg-yellow'></div>
               <div className='background-box-2 bg-green'></div>
           </section>
                <h1>Alguns Projetos</h1>
            <section className='container-project'>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
                <MiniCard></MiniCard>
            </section>
        </section>)
}

export default Projetos;