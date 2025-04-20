import "../Login/login.css";
import "../Signup/signup.css";
import "../../validacionesForm/validaciones.css";
import facebookLogo from "../../../public/logos/Facebook_Logo_(2019).png";
import googleLogo from "../../../public/logos/google-plus-logo.png";
import { Form } from "../../validacionesForm/form.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedConfirmPassword, setTouchedConfirmPassword] = useState(false);

  let username;

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
    }
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
        <dialog className="dialog-codigo-clase" ref={dialogRef}>
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
          <button className="white-btn scale" onClick={cerrarDialog}>
            Cerrar
          </button>
        </dialog>
        <div className="formulario">
          <h5 className="verde">
            <strong>ActiveClassroom</strong>
          </h5>
          <p className="gray-text centrar-parrafo">
            <strong>Regístrate</strong>
          </p>
          <button className="white-btn scale flex-btn">
            <img
              src={facebookLogo}
              alt="facebook-logo"
              width={"24px"}
              height={"24px"}
            />
            REGÍSTRATE CON FACEBOOK
          </button>
          <button className="white-btn scale flex-btn">
            <img
              src={googleLogo}
              alt="google-plus-logo"
              width={"24px"}
              height={"24px"}
            />
            REGÍSTRATE CON GOOGLE
          </button>
          <div className="contenedor-formulario">
            <span className="gray-text">Nombre de usuario</span>
            <input type="text" value={username} />
          </div>
          <div className="contenedor-formulario">
            <span className="gray-text">Correo electrónico</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={blurCorreo}
              className={touchedEmail ? (emailError ? "invalid" : "valid") : ""}
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
              className={
                touchedPassword ? (passwordError ? "invalid" : "valid") : ""
              }
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
              className={
                touchedConfirmPassword
                  ? confirmPasswordError
                    ? "invalid"
                    : "valid"
                  : ""
              }
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
            className="green-btn scale"
            disabled={isSignupDisabled()}
            onClick={areInputsEmpty}
          >
            Registrar
          </button>
          <div
            className="password-segura verde bold-span pointer"
            onClick={abrirDialog}
          >
            ¿Cómo creo una contraseña segura?
          </div>
          <hr />
          <p className="text-center gray-text">
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
