import "./login.css";
import "../../validacionesForm/validaciones.css";
import facebookLogo from "../../../public/logos/Facebook_Logo_(2019).png";
import googleLogo from "../../../public/logos/google-plus-logo.png";

function Login() {
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
            <strong>Inicia sesión</strong>
          </p>
          <button className="white-btn scale flex-btn">
            <img
              src={facebookLogo}
              alt="facebook-logo"
              width={"24px"}
              height={"24px"}
            />
            INICIA SESIÓN CON FACEBOOK
          </button>
          <button className="white-btn scale flex-btn">
            <img
              src={googleLogo}
              alt="google-plus-logo"
              width={"24px"}
              height={"24px"}
            />
            INICIA SESIÓN CON GOOGLE
          </button>
          <div className="contenedor-formulario">
            <span className="gray-text">Correo electrónico</span>
            <input type="email" />
          </div>
          <div className="contenedor-formulario">
            <span className="gray-text">Contraseña</span>
            <input type="password" />
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <span className="gray-text">Recuérdame</span>
          </div>
          <button className="green-btn scale">Iniciar sesión</button>
          <h5 className="verde">
            <strong>¿Olvidaste tu contraseña?</strong>
          </h5>
          <hr />
          <button className="white-btn scale">Regístrate</button>
        </div>
      </div>
    </>
  );
}

export default Login;
