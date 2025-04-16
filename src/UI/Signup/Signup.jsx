import { Link } from "react-router-dom";
import "./signup.css";
import facebookLogo from "../../../public/logos/Facebook_Logo_(2019).png";
import googleLogo from "../../../public/logos/google-plus-logo.png";

function Signup() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
      className="div-fondo"
    >
      <div className="formulario-registro">
        <h5 className="text-center verde">ActiveClassroom</h5>
        <p className="text-center gray-text">
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
        {/* la clase flex-btn está en login.css, por alguna razón que desconozco puedo aplicar estilos de archivos css que no tengo vinculados al archivo, si quieres hacer algún cambio en el diseño, haz una clase especifica como .clase y añade los cambios a esa clase, no los hagas sobre etiquetas porque luego va a causar problemas*/}
        <button className="white-btn scale flex-btn">
          <img
            src={googleLogo}
            alt="google-logo"
            width={"24px"}
            height={"24px"}
          />
          REGÍSTRATE CON GOOGLE
        </button>
        <div className="contenedor-input">
          <div className="contenedor-interno">
            <span className="gray-text">Nombre(s)</span>
            <input type="text" />
          </div>
          <div className="contenedor-interno">
            <span className="gray-text">Apellido(s)</span>
            <input type="text" />
          </div>
        </div>
        <div className="contenedor-correo">
          <span className="gray-text">Correo electrónico</span>
          <input type="email" />
        </div>
        <div className="contenedor-input">
          <div className="contenedor-interno">
            <span className="gray-text">Contraseña</span>
            <input type="text" />
          </div>
          <div className="contenedor-interno">
            <span className="gray-text">Confirmar contraseña</span>
            <input type="text" />
          </div>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <span className="gray-text">Recuérdame</span>
        </div>
        <button className="green-btn scale">Registrar</button>
        <hr />
        <p className="text-center gray-text">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
