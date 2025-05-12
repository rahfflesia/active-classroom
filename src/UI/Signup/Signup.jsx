import "../Login/login.css";
import "../Signup/signup.css";
import "../../validacionesForm/validaciones.css";
import facebookLogo from "../../../public/logos/Facebook_Logo_(2019).png";
import googleLogo from "../../../public/logos/google-logo.png";
import { Form } from "../../validacionesForm/form.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google';

const apiUrl = import.meta.env.VITE_API_URL;

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedConfirmPassword, setTouchedConfirmPassword] = useState(false);

  const[Register] = useState({
    username: "",
    correo: "",
    password: "",
    tipousuario: localStorage.getItem("rol"),
  })

  const adduser = () =>{
    axios.post(apiUrl + '/api/signup/', Register).then(() => { 
      alert(`Usuario ${Register.username} ha sido registrado, por favor inicie sesion con su usuario`)
      navigate("/login")
    })
   console.log(Register)
  }

  //let username;
 

  const blurCorreo = () => {
    setTouchedEmail(true);
    if (Form.isEmailValid(email)) {
      setEmailError("");
    } else {
      setEmailError(
        "Por favor ingresa un correo válido, ejemplo: correo@dominio.com"
      );
    }
  };

  const blurPassword = () => {
    setTouchedPassword(true);
    if (Form.isPasswordValid(password)) {
      setPasswordError("");
    } else {
      setPasswordError("La contraseña no es segura");
    }
  };

  const blurConfirmPassword = () => {
    setTouchedConfirmPassword(true);
    if (Form.passwordsMatch(password, confirmPassword)) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Las contraseñas no coinciden");
    }
  };

  const isSignupDisabled = () => {
    if (!touchedEmail && !touchedPassword && !touchedConfirmPassword) {
      return false;
    }

    return (
      !Form.passwordsMatch(password, confirmPassword) ||
      !Form.isPasswordValid(password) ||
      !Form.isEmailValid(email)
    );
  };

  const dialogRef = useRef(null);

  const abrirDialog = () => {
    dialogRef.current.showModal();
  };

  const cerrarDialog = () => {
    dialogRef.current?.close();
  };

  const areInputsEmpty = () => {
    if (
      Form.isEmpty(email) ||
      Form.isEmpty(password) ||
      Form.isEmpty(confirmPassword) ||
      Form.isEmpty(username)
    ) {
      alert("Ningún campo puede quedar vacío");
    }else{
      Register.username = username;
      Register.password = password;
      Register.correo = email;
      adduser()
    }
  };


  const handleGoogleSuccess = async (credentialResponse) => {
    console.log("Google credential:", credentialResponse);
    const token = credentialResponse.credential;
    try {
      const { data } = await axios.post(`${apiUrl}/api/login/google`, { token });
      if (data.user) {
        guardarDatos(data.user);
        navigate("/codigo")
      } else {
        alert("Error al iniciar sesión con Google");
      }
    } catch (err) {
      console.error("Error en backend Google login", err);
    }
    navigate("/codigo")
  };
  
  const handleGoogleError = () => {
    console.error("Login con Google fallido");
    alert("No se pudo iniciar sesión con Google");
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
        <dialog className="dialog-codigo-clase small-font" ref={dialogRef}>
          <h4 className="verde">Contraseñas seguras</h4>
          <div className="gray-text">
            Para que una contraseña sea considerada segura debe incluir lo
            siguiente:
            <ul>
              <li>- Una longitud de al menos ocho caracteres</li>
              <li>- Al menos una mayúscula</li>
              <li>- Al menos una minúscula</li>
              <li>- Al menos un número</li>
              <li>- Al menos un caracter especial (#, $, @, !, *, etc.)</li>
            </ul>
          </div>
          <button
            className="white-btn scale gray-border-bottom"
            onClick={cerrarDialog}
          >
            Cerrar
          </button>
        </dialog>
        <div className="formulario">
          <h5 className="verde small-font">
            <strong>ActiveClassroom</strong>
          </h5>
          <p className="gray-text centrar-parrafo small-font">
            <strong>Regístrate</strong>
          </p>
          <button className="white-btn scale flex-btn gray-border-bottom btn-registro small-font">
            <img
              src={facebookLogo}
              alt="facebook-logo"
              width={"24px"}
              height={"24px"}
            />
            REGÍSTRATE CON FACEBOOK
          </button>
            <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
          />

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
            <span className="gray-text">Correo electrónico</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={blurCorreo}
              className={`small-font ${
                touchedEmail ? (emailError ? "invalid" : "valid") : ""
              }`}
            />
            <span
              className={`email-span span ${emailError ? "error-message" : ""}`}
            >
              {emailError}
            </span>
          </div>
          <div className="contenedor-formulario">
            <span className="gray-text">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={blurPassword}
              className={`small-font ${
                touchedPassword ? (passwordError ? "invalid" : "valid") : ""
              }`}
            />
            <span
              className={`password-span span ${
                passwordError ? "error-message" : ""
              }`}
            >
              {passwordError}
            </span>
          </div>
          <div className="contenedor-formulario">
            <span className="gray-text">Confirmar Contraseña</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={blurConfirmPassword}
              className={`small-font ${
                touchedConfirmPassword
                  ? confirmPasswordError
                    ? "invalid"
                    : "valid"
                  : ""
              }`}
            />
            <span
              className={`password-span span ${
                confirmPasswordError ? "error-message" : ""
              }`}
            >
              {confirmPasswordError}
            </span>
          </div>
          <button
            className="green-btn scale green-border-bottom small-font"
            disabled={isSignupDisabled()}
            onClick={areInputsEmpty}
          >
            Registrar
          </button>
          <div
            className="password-segura verde bold-span pointer small-font"
            onClick={abrirDialog}
          >
            ¿Cómo creo una contraseña segura?
          </div>
          <hr />
          <p className="text-center gray-text small-font">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="verde">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
