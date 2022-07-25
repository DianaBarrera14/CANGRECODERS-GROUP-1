import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Menu from '../pages/menu'
import Profesores from '../pages/profesores';
import Alumnos from '../pages/alumnos';
import Usuarios from '../pages/usuarios'
function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
<<<<<<< HEAD
        <Route exact path='/menu' element={<Menu/>} /> 
        <Route exact path='/profesores' element={<Profesores/>} /> 
        <Route exact path='/alumnos' element={<Alumnos/>} /> 
=======
        <Route exact path='/menu' element={<Menu/>}/> 
        <Route exact path='/profesores' element={<Profesores/>}/> 
        <Route exact path='/alumnos' element={<Alumnos/>}/> 
        <Route exact path='/usuarios' element={<Usuarios/>}/> 
>>>>>>> be641b830d8440ca0603f79e6e62ade75a54f9e3
      </Routes>
    </Router>
  );
}

export default App;
