import React, { Component } from "react";
//import '../css/index.css';
import axios from 'axios';

const baseUrl="http://localhost:3003/educationsystem/usuarios";

class login extends Component {
    state={
        form:{
            txtUsuario: '',
            txtPassword: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
    }

    iniciarSerion=async()=>{
        await axios.get(baseUrl,{params:{user:this.state.form.txtUsuario, password:this.state.form.txtPassword}})
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{
            alert(error);
        })
    }


  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              className="image-login"
              src="https://findicons.com/files/icons/1035/human_o2/128/gdm_login_photo.png"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="text"
              id="txtUsuario"
              className="fadeIn second"
              name="txtUsuario"
              placeholder="Usuario"
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              id="txtPassword"
              className="fadeIn third"
              name="txtPassword"
              placeholder="Contraseña"
              onChange={this.handleChange}
            ></input>
            <button onClick={()=> this.iniciarSerion()} type="submit" className="btn-primary">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
 export default login;