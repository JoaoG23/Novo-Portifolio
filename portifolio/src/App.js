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
          <Header></Header>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/sobre' element={<Sobre />}></Route>
          <Route path='/projetos' element={<Projetos />}></Route>
          <Route path='/habilidade' element={<Projetos />}></Route>
          <Route path='/contatos' element={<Projetos />}></Route>
          <Route path='*' element={<h2>Essa Rota não Existe</h2>}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
