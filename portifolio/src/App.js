import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Componentes/Header';
import HomePage from './Pages/HomePage';
import Sobre from './Pages/Sobre';
import Projetos from './Pages/Projetos';

function App() {
  return (
    <Router>
      <div>
      <Routes>
      <Route exact path='/' element={<HomePage />}></Route>
      <Route  path='/Sobre' element={<Sobre />}></Route>
      <Route  path='/Projetos' element={<Projetos />}></Route>

        <Header links={["Pagina Inicial", "Sobre", "Projetos", "Habilidades", "Contatos"]}></Header>
        {/* <HomePage></HomePage>
    <Sobre></Sobre> */}
        <Route path='*' element={<h2>Essa Rota não Existe</h2>}></Route>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
