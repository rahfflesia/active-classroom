import "./login.css";
import "../../validacionesForm/validaciones.css";
import facebookLogo from "../../../public/logos/Facebook_Logo_(2019).png";
import googleLogo from "../../../public/logos/google-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
function Login() {
  const navigate = useNavigate();
  
  const[Login] = useState({
      username: "",
      password: ""
  })

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  const loguear =  async () =>{
    try {
      Login.username = username;
      Login.password = password;
      const datosUser = await axios.post(apiUrl + '/api/login', Login)
      console.log(datosUser.statusText);
      //console.log(datosUser);
      if(datosUser.data.length > 0){
        
        guardarDatos(datosUser.data[0]);
      }else{
        alert("Nombre de usuario o contraseña incorrectos")
      }
      
    } catch (error) {
      console.error("Ha ocurrido un error en la conexion", error)
    }
    
  }

  const guardarDatos = (userData) => {
    console.log(userData)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('iduser', userData.id);
    localStorage.setItem('username', userData.username);
    localStorage.setItem('correo', userData.correo);
    localStorage.setItem('password', userData.password);
    localStorage.setItem('tipousuario', userData.tipousuario);

    if(userData.tipousuario == 1){
      alert("Alumno iniciado")
      navigate("/codigo")
    }else{
      alert("Maestro Iniciado")
      navigate("/graficas")
    }
  }

  const toSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="div-fondo"
      >
        <div className="formulario">
          <h5 className="verde small-font">
            <strong>ActiveClassroom</strong>
          </h5>
          <p className="gray-text centrar-parrafo small-font">
            <strong>Inicia sesión</strong>
          </p>
          <button className="white-btn scale flex-btn gray-border-bottom small-font">
            <img
              src={facebookLogo}
              alt="facebook-logo"
              width={"24px"}
              height={"24px"}
            />
            INICIA SESIÓN CON FACEBOOK
          </button>
          <button className="white-btn scale flex-btn gray-border-bottom small-font">
            <img
              src={googleLogo}
              alt="google-plus-logo"
              width={"24px"}
              height={"24px"}
            />
            INICIA SESIÓN CON GOOGLE
          </button>
          <div className="contenedor-formulario">
            <span className="gray-text">Nombre de usuario</span>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="small-font" 
              />
          </div>
          <div className="contenedor-formulario">
            <span className="gray-text">Contraseña</span>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="small-font" 
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <span className="gray-text">Recuérdame</span>
          </div>
          <button className="green-btn scale green-border-bottom small-font" onClick={loguear}>
            Iniciar sesión
          </button>
          <h5 className="verde small-font">
            <strong>¿Olvidaste tu contraseña?</strong>
          </h5>
          <hr />
          <button
            className="white-btn scale gray-border-bottom small-font"
            onClick={toSignup}
          >
            Regístrate
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
