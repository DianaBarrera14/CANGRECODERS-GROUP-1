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
        <Route exact path='/menu' element={<Menu/>}/> 
        <Route exact path='/profesores' element={<Profesores/>}/> 
        <Route exact path='/alumnos' element={<Alumnos/>}/> 
        <Route exact path='/usuarios' element={<Usuarios/>}/> 
=======
        <Route exact path='/menu' element={<Menu/>} /> 
        <Route exact path='/profesores' element={<Profesores/>} /> 
        <Route exact path='/alumnos' element={<Alumnos/>} /> 
<<<<<<< HEAD
        <Route exact path='/usuarios' element={<Usuarios/>} /> 
=======
>>>>>>> 0a998e4dd26dabc1f4b570c56b76de80638ee170
>>>>>>> 11d4eb6f50afe554b294693dbc8dc9202573caca
      </Routes>
    </Router>
  );
}

export default App;
