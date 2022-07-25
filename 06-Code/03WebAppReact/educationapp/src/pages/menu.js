import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css'

const cookies = new Cookies();
class menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id',{path:"/"});
        cookies.remove('cedula',{path:"/"});
        cookies.remove('name',{path:"/"});
        cookies.remove('lastname',{path:"/"});
        window.location.href='./'
    }

     componentDidCatch(){
        if(!cookies.get('cedula')){
            window.location.href="./menu";
        }
    }

  render() {
    
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <button className='btn btn-primary' onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
      </li>
      
    </ul>
  
  </div>
</nav>
    )
  }
}
export default menu;
