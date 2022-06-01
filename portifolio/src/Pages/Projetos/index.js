import './style.css';
import MiniCard from './MiniCard';

function Projetos() {
    return(
        <section className='transitionsSoft'>
           <section>
               <div className='background-box-1 bg-red'></div>
               <div className='background-box-3 bg-yellow'></div>
               <div className='background-box-2 bg-green'></div>
               <div></div>
           </section>
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