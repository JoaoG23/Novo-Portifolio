import './style.css';

function HomePage() {
    return(
    <section className='container'>
        <article className='font-large'>
            <h1>Soluções voltadas para Web </h1>
            <h1>Como Landing Pages e Sites</h1>
        </article>
        <div>
            <div className='background-box-1'></div>
            <div className='background-box-2'></div>
        </div>
        <aside>
            <img className='img' src='./Assets/icons/laptopHome.svg'></img>
        </aside>
    </section>)
}

export default HomePage;