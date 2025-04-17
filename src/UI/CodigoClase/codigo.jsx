import React from "react";
import "./codigo.css";
import { Link } from "react-router-dom";

function Codigo() {
  return (
    <>
      <div className="clase-container">
        <div className="contenedor">
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
              <p className="sm-font">¿Qué es un código de clase?</p>
              <hr />
              <div className="botones">
                <button className="white-btn scale sm-font">
                  Iniciar sesión
                </button>
                <button className="white-btn scale sm-font">Registrarte</button>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Codigo;
