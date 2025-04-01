import { Link } from "react-router-dom";
import "./signup.css";

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
        <button className="white-btn">INICIA SESIÓN CON GOOGLE</button>
        <button className="white-btn">INICIA SESIÓN CON FACEBOOK</button>
        <div className="contenedor-input">
          <div className="contenedor-interno">
            <span>Nombre(s)</span>
            <input type="text" />
          </div>
          <div className="contenedor-interno">
            <span>Apellido(s)</span>
            <input type="text" />
          </div>
        </div>
        <div className="contenedor-correo">
          <span>Correo electrónico</span>
          <input type="email" />
        </div>
        <div className="contenedor-input">
          <div className="contenedor-interno">
            <span>Contraseña</span>
            <input type="text" />
          </div>
          <div className="contenedor-interno">
            <span>Confirmar contraseña</span>
            <input type="text" />
          </div>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <span>Recuérdame</span>
        </div>
        <button className="green-btn">Regístrar</button>
        <hr />
        <p className="text-center">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
