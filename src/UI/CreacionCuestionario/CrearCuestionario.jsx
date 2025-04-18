import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./crearcuestionario.css";

function CrearCuestionario() {
  return (
    <>
      <div className="container-fluid contenedor-base d-flex flex-column p-0">
        <div className="container-fluid shadow p-3">
          <h3 className="verde m-0">
            <strong>ActiveClassroom</strong>
          </h3>
        </div>
        <div className="cuestionario container-fluid">
          <div className="row expand">
            <div className="col-sm p-0 contenedor-preguntas-agregar p-3 shadow">
              <p className="bold-span text-center shadow p-2 elemento-preguntas-agregar verde">
                Pregunta 1
              </p>
              <p className="shadow bold-span text-center p-2 elemento-preguntas-agregar verde">
                Pregunta 2
              </p>
              <p className="shadow bold-span text-center p-2 elemento-preguntas-agregar verde">
                Pregunta 3
              </p>
              <p className="shadow bold-span text-center p-2 elemento-preguntas-agregar verde">
                Pregunta 4
              </p>
              <p className="shadow bold-span text-center p-2 elemento-preguntas-agregar verde">
                Pregunta 5
              </p>
            </div>
            <div className="col-8 p-0 m-0 contenedor-preguntas container-sm d-flex align-items-center justify-content-center">
              <div className="contenedor-preguntas-interno p-4 flex flex-column gap-4">
                <input
                  type="text"
                  placeholder="Escribe la pregunta"
                  className="container-fluid text-center p-3 input-pregunta"
                />
                <div className="seccion-preguntas">
                  <div className="d-flex gap-3 flex-wrap mb-3 w-100">
                    <div className="col-sm respuesta p-4 bold-span">
                      <input
                        type="text"
                        placeholder="Respuesta 1"
                        className="w-100 input-respuesta"
                      />
                    </div>
                    <div className="col-sm respuesta p-4 bold-span">
                      <input
                        type="text"
                        placeholder="Respuesta 2"
                        className="w-100 input-respuesta"
                      />
                    </div>
                  </div>
                  <div className="d-flex gap-3 flex-wrap">
                    <div className="col-sm respuesta p-4 bold-span">
                      <input
                        type="text"
                        placeholder="Respuesta 3"
                        className="w-100 input-respuesta"
                      />
                    </div>
                    <div className="col-sm respuesta p-4 bold-span">
                      <input
                        type="text"
                        placeholder="Respuesta 4"
                        className="w-100 input-respuesta"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex flex-column gap-3 shadow p-3 justify-content-between">
              <div className="d-flex flex-column gap-3">
                <div className="flex flex-column gap-2">
                  <span className="bold-span">Tipo de pregunta</span>
                  <select
                    name="tipo-pregunta"
                    id="tipo-pregunta"
                    className="select-cuestionario"
                  >
                    <option value="quiz">Quiz</option>
                    <option value="verdadero-falso">Verdadero o falso</option>
                  </select>
                </div>
                <div className="flex flex-column gap-2">
                  <span className="bold-span">Límite de tiempo</span>
                  <select
                    name="limite-tiempo"
                    id="limite-tiempo"
                    className="select-cuestionario"
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
                </div>
                <div className="flex flex-column gap-2">
                  <span className="bold-span">Valor de la pregunta</span>
                  <select
                    name="valor-pregunta"
                    id="valor-pregunta"
                    className="select-cuestionario"
                  >
                    <option value="un-punto">1 punto</option>
                    <option value="dos-puntos">2 puntos</option>
                    <option value="cinco-puntos">5 puntos</option>
                    <option value="diez-puntos">10 puntos</option>
                  </select>
                </div>
                <div className="flex flex-column gap-2">
                  <span className="bold-span">Retroalimentación inmediata</span>
                  <select
                    name="retroalimentacion"
                    id="retroalimentacion"
                    className="select-cuestionario"
                  >
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-column gap-2">
                <button className="green-btn-cuestionario">Agregar</button>
                <button className="white-btn-cuestionario">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearCuestionario;
