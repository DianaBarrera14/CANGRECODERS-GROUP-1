import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Menu from '../pages/menu'
import Profesores from '../pages/profesores';
import Alumnos from '../pages/alumnos';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/menu' element={<Menu/>} /> 
        <Route exact path='/profesores' element={<Profesores/>} /> 
        <Route exact path='/alumnos' element={<Alumnos/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
