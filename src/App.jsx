import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Simulador from './Simulador';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Calculadora Neumann</h1>
        <p>Esta es una simulación de la arquitectura de Von Neumann para realizar la suma de 5 + 6 = 11.</p>
        <Link to="/simulador">
          <button>Ir al Simulador</button>
        </Link>

        <Routes>
          <Route path="/simulador" element={<Simulador />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;