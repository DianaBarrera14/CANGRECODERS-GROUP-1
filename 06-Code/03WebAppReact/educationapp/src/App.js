import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="wrapper fadeInDown">
  <div id="formContent">
      <div className="fadeIn first">
      <img className="image-login" src="https://findicons.com/files/icons/1035/human_o2/128/gdm_login_photo.png" id="icon" alt="User Icon" />
    </div>

    
    <form  onsubmit="event.preventDefault()">
      <input type="text" id="txtUsuario" class="fadeIn second" name="txtUsuario" placeholder="Usuario"></input>
      <input type="password" id="txtPassword" class="fadeIn third" name="txtPassword" placeholder="Contraseña"></input>
      <button onclick="validaUsuario()" type="submit" class="btn-primary">Ingresar</button>
    </form>

 

  </div>
</div>
  );
}

export default App;
