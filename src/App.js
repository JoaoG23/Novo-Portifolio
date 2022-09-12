import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Componentes/Header';
import HomePage from './Pages/HomePage';
import Sobre from './Pages/Sobre';
import Projetos from './Pages/Projetos';
import Habilidades from './Pages/Habilidades';
import Contatos from './Pages/Contatos';

function App() {

  return (
    <Router>
      <main>
          <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/sobre' element={<Sobre />}></Route>
          <Route path='/projetos' element={<Projetos />}></Route>
          <Route path='/habilidade' element={<Habilidades />}></Route>
          <Route path='/contatos' element={<Contatos />}></Route>
          <Route path='*' element={<HomePage />}></Route>
        </Routes>
      </main>
    </Router>

  );
}

export default App;
