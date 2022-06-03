import './style.css';

function HomePage() {
    return(
    <section className='container-home transitionsSoft'>
        <article className='font-large'>
            <h1>Soluções voltadas para Web </h1>
            <h1>Como Landing Pages e Sites</h1>
        </article>
        <div>
            <div className='background-box-1 bg-blue'></div>
            <div className='background-box-2 bg-green'></div>
        </div>
            <img className='img-home' src='./Assets/icons/laptopHome.svg' alt='notebook'></img>
    </section>)
}

export default HomePage;