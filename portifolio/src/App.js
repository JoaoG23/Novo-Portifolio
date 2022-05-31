import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import HomePage from './Pages/HomePage';

function App() {
  return ( <div>
    <Header  links={["Pagina Inicial","Sobre","Projetos","Habilidades","Contatos"]}></Header>
    <HomePage></HomePage>
  </div>);
}

export default App;
