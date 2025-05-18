import "bootstrap/dist/css/bootstrap.min.css";
import "./crearcuestionario.css";
import { useState } from "react";
import QuizForm from "./QuizForm";
import VerdaderoFalsoForm from "./VerdaderoFalsoForm";

function CrearCuestionario() {
  const [opcion, setOpcion] = useState("quiz");
  const [preguntas, setPreguntas] = useState(
    Array.from({ length: 10 }, (_, index) => index + 1) // Estado inicial
  );
    const handleAgregarPregunta = () => {
    setPreguntas([...preguntas, preguntas.length + 1]); // Agrega nueva pregunta
  };

  return (
    <div className="container-fluid contenedor-base d-flex flex-column p-0">
      <nav className="navbar navbar-expand-lg navbar-creacion-cuestionario p-3 shadow">
        <div className="container-md">
          <div className="d-flex gap-2 align-items-center">
            <h4 className="verde m-0">
              <strong>ActiveClassroom</strong>
            </h4>
          </div>
          <button
            className="navbar-toggler mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="navbar-creacion-cuestionario-interno container-fluid d-flex flex-lg-row gap-3 justify-content-center align-items-center p-0">
              <div className="botones-izq d-flex gap-2 flex-wrap container-fluid justify-content-end p-0">
                <input
                  type="text"
                  placeholder="Ingresa el título del cuestionario"
                  className="input-cuestionario bold-span"
                />
                <button className="white-btn-cuestionario gray-border-bottom scale boton-nav">
                  Salir
                </button>
                <button className="green-btn-cuestionario green-border-bottom scale boton-nav">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="cuestionario container-fluid p-0 d-flex justify-content-center">
        <div className="row expand limitar">
          <div className="col-sm contenedor-preguntas-agregar p-3 d-flex flex-column gap-3">
            <div className="contenedor-preguntas-agregar-interno d-flex flex-column gap-3">
              {preguntas.map((num) => (
                <div className="previsualizacion-pregunta" key={num}>
                  <div className="titulo-iconos mb-1 d-flex justify-content-between align-items-center">
                    <span className="gray-text bold-span d-flex gap-2">
                      Pregunta {num}
                    </span>
                  </div>
                  <div className="miniatura-pregunta gray-text pointer">
                    Pregunta {num}
                  </div>
                </div>
              ))}
            </div>
             <button 
        className="green-btn-cuestionario green-border-bottom btn-agregar-pregunta"
        onClick={handleAgregarPregunta}
      >
        Agregar nueva pregunta
      </button>
          </div>
          <div className="col-8 p-0 m-0 contenedor-preguntas container-sm d-flex align-items-center justify-content-center">
            <div className="contenedor-preguntas-interno p-4 flex flex-column gap-4">
              <input
                type="text"
                placeholder="Escribe la pregunta"
                className="container-fluid text-center p-3 input-pregunta green-border-bottom"
              />
              <div className="seccion-preguntas">
                {opcion === "quiz" && <QuizForm />}
                {opcion === "verdadero-falso" && <VerdaderoFalsoForm />}
              </div>
            </div>
          </div>

          <div className="col-sm d-flex flex-column gap-3 shadow p-3 justify-content-between">
            <div className="d-flex flex-column gap-3">
              <div className="flex flex-column gap-2">
                <span className="bold-span gray-text">Tipo de pregunta</span>
                <select
                  className="select-cuestionario gray-text"
                  name="tipo-pregunta"
                  onChange={(e) => setOpcion(e.target.value)}
                >
                  <option value="quiz">Quiz</option>
                  <option value="verdadero-falso">Verdadero o falso</option>
                </select>
              </div>
              <div className="flex flex-column gap-2">
                <span className="bold-span gray-text">Límite de tiempo</span>
                <select
                  className="select-cuestionario gray-text"
                  name="limite-tiempo"
                >
                  <option value="10-segundos">10 segundos</option>
                  <option value="20-segundos">20 segundos</option>
                  <option value="30-segundos">30 segundos</option>
                  <option value="40-segundos">40 segundos</option>
                  <option value="50-segundos">50 segundos</option>
                  <option value="1-minuto">1 minuto</option>
                  <option value="2-minutos">2 minutos</option>
                  <option value="3-minutos">3 minutos</option>
                  <option value="4-minutos">4 minutos</option>
                  <option value="5-minutos">5 minutos</option>
                </select>
                <div className="d-flex gap-2">
                  <input type="checkbox" id="mismos-tiempo-preguntas" />
                  <span className="gray-text">
                    Aplicar el mismo tiempo para todas las preguntas
                  </span>
                </div>
              </div>
              <div className="flex flex-column gap-2">
                <span className="bold-span gray-text">
                  Valor de la pregunta
                </span>
                <select
                  className="select-cuestionario gray-text"
                  name="valor-pregunta"
                >
                  <option value="un-punto">1 punto</option>
                  <option value="dos-puntos">2 puntos</option>
                  <option value="cinco-puntos">5 puntos</option>
                  <option value="diez-puntos">10 puntos</option>
                </select>
                <div className="d-flex gap-2">
                  <input type="checkbox" id="mismos-puntos-preguntas" />
                  <span className="gray-text">
                    Mismos puntos para todas las preguntas
                  </span>
                </div>
              </div>
              <div className="flex flex-column gap-2">
                <span className="bold-span gray-text">
                  Retroalimentación inmediata
                </span>
                <select
                  className="select-cuestionario gray-text"
                  name="retroalimentacion"
                >
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="flex flex-column gap-2">
              <button className="green-btn-cuestionario green-border-bottom">
                Agregar
              </button>
              <button className="white-btn-cuestionario gray-border-bottom">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearCuestionario;
