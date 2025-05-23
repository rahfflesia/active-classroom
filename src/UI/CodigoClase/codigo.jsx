import React from "react";
import "./codigo.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Codigo() {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  const toSignup = () => {
    navigate("/signup");
  };

  const dialogRef = useRef(null);

  const abrirDialog = () => {
    dialogRef.current.showModal();
  };

  const cerrarDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div className="clase-container">
        <dialog className="dialog-codigo-clase" ref={dialogRef}>
          <div>
            <h3 className="verde bold-span">Código de clase</h3>
            <p className="gray-text">
              Los códigos de clase en ActiveClassroom consisten de una secuencia
              de ocho caracteres alfanuméricos. Este código es proporcionado por
              tu profesor, si aún no tienes el tuyo pídeselo a tu profesor.
            </p>
          </div>
          <button
            className="white-btn gray-border-bottom"
            onClick={cerrarDialog}
          >
            Cerrar
          </button>
        </dialog>
        <div className="contenedor gray-border-bottom">
          <h3 className="text-center verde">
            <strong>ActiveClassroom</strong>
            <p className="text-center verde sm-font">
              Ingresa tu código de clase
            </p>
            <div className="codigo-clase shadow">
              <h4 className="gray-text">
                <strong>Empezar a trabajar</strong>
              </h4>
              <div className="input-div">
                <span className="gray-text text-left">Código de clase</span>
                <input type="text" className="input-codigo" />
              </div>
              <div
                className="codigo-clase-contenedor pointer"
                onClick={abrirDialog}
              >
                <p className="sm-font">¿Qué es un código de clase?</p>
              </div>
              <hr />
              {/*
                
                <div className="botones">
                <button
                  className="white-btn scale sm-font gray-border-bottom"
                  onClick={toLogin}
                >
                  Iniciar sesión
                </button>
                <button
                  className="white-btn scale sm-font gray-border-bottom"
                  onClick={toSignup}
                >
                  Registrarte
                </button>
              </div>
              */}
              
            </div>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Codigo;
