import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Menu from '../pages/menu'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/menu' element={<Menu/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
