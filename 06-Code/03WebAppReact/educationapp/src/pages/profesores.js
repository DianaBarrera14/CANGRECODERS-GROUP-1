import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import TeachersSearch from '../components/TeachersSearch';

const baseUrl = "http://localhost:3000/educationsystem/user";
const cookies = new Cookies();
//const [client, setClient] = useState(null);
const url="http://localhost:3000/educationsystem/profesores";

export default class profesores extends Component {



    
    render() {
    return (


      <div>
        <TeachersSearch />
        <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <h3>REGISTRO DE PROFESORES</h3>
              <p class="blue-text">Complete todos los campos para registrar al Profesor</p>
              <div class="card">

                <form class="form-card" >
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Cédula Profesor<span class="text-danger"> *</span></label> <input type="text" id="txtCedula" name="txtCedula" placeholder="ej: 0704556920" onChange={this.handleChange} />
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Nombre de usuario<span class="text-danger"> *</span></label> <input type="text" id="txtUsuario" name="txtUsuario" placeholder="Inicial del nombre y apellido, Ej: jcarrera" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Contraseña<span class="text-danger"> *</span></label> <input type="text" id="txtPassword" name="txtPassword" placeholder="Número de cédula, EJ: 1600894628" onChange={this.handleChange} />
                    </div>
                  </div>

                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Nombres del profesor<span class="text-danger"> *</span></label> <input type="text" id="txtNombre" name="txtNombre" placeholder="Nombres del Profesor" onChange={this.handleChange} /> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Apellidos del profesor<span class="text-danger"> *</span></label> <input type="text" id="txtApellido" name="txtApellido" placeholder="Apellidos del Profesor " onChange={this.handleChange} /> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Tipo de usuario<span class="text-danger"> *</span></label> <input type="text" id="txtTipo" name="txtTipo" placeholder="Ej: docente, alumno" onChange={this.handleChange} /> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Status<span class="text-danger"> *</span></label> <input type="text" id="txtStatus" name="txtStatus" placeholder="Ej: activo, inactivo" onChange={this.handleChange} /> </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6"> <button onClick={() => this.putTeacher()} type="submit" class="btn-block btn-primary">Registrar Profesor</button> </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
