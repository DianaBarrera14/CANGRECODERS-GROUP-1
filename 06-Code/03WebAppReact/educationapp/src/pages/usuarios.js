import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import UserSearch from '../components/UserSearch';

export default class usuarios extends Component {

 
    render() {
    return (


      <div>
        <UserSearch />
        <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <h3>REGISTRO DE USUARIOS</h3>
              <p class="blue-text">Complete todos los campos para registrar al Estudiante</p>
              <div class="card">

                <form class="form-card" >
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Cédula Estudiante<span class="text-danger"> *</span></label> <input type="text" id="txtCedula" name="txtCedula" placeholder="ej: 0701990836" onChange={this.handleChange} />
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
                      Nombres del estudiante<span class="text-danger"> *</span></label> <input type="text" id="txtNombre" name="txtNombre" placeholder="Nombres del Estudiante" onChange={this.handleChange} /> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Apellidos del estudiante<span class="text-danger"> *</span></label> <input type="text" id="txtApellido" name="txtApellido" placeholder="Apellidos del Estudiante " onChange={this.handleChange} /> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Tipo de usuario<span class="text-danger"> *</span></label> <input type="text" id="txtTipo" name="txtTipo" placeholder="Ej: docente, alumno" onChange={this.handleChange} /> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Status<span class="text-danger"> *</span></label> <input type="text" id="txtStatus" name="txtStatus" placeholder="Ej: activo, inactivo" onChange={this.handleChange} /> </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6"> <button onClick={() => this.putStudent()} type="submit" class="btn-block btn-primary">Registrar Estudiante</button> </div>
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
