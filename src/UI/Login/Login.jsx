import "./login.css";

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
          <button className="white-btn">INICIA SESIÓN CON GOOGLE</button>
          <button className="white-btn">INICIA SESIÓN CON FACEBOOK</button>
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
            <span>Recuérdame</span>
          </div>
          <button className="green-btn">Iniciar sesión</button>
          <h5 className="verde">
            <strong>¿Olvidaste tu contraseña?</strong>
          </h5>
          <hr />
          <button className="white-btn">Regístrate</button>
        </div>
      </div>
    </>
  );
}

export default Login;
