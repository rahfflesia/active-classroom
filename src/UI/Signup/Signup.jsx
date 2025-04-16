import "../Login/login.css";
import "../../validacionesForm/validaciones.css";
import facebookLogo from "../../../public/logos/Facebook_Logo_(2019).png";
import googleLogo from "../../../public/logos/google-plus-logo.png";
import { Form } from "../../validacionesForm/form.js";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <input type="text" />
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
          <button className="green-btn scale">Registrar</button>
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
