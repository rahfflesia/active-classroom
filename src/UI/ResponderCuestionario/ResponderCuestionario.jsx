import "./respondercuestionario.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ResponderCuestionario() {
  return (
    <>
      <div className="raiz">
        <div className="contenido-principal d-flex flex-column justify-content-center align-items-center">
          <div className="contenedor-tiempo w-100 d-flex justify-content-between">
            <h6 className="m-0 gray-text bold-span d-flex justify-content-center align-items-center">
              Geografía de México
            </h6>
            <div className="tiempo-restante white-text d-flex justify-content-center align-items-center">
              <h3 className="m-0 tiempo-restante-interno">
                <strong>60</strong>
              </h3>
            </div>
          </div>
          <div className="contenido-principal-interno d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <h3 className="verde text-center titulo-app-web">
                <strong>ActiveClassroom</strong>
              </h3>
            </div>
            <div className="responder-cuestionario">
              <h4 className="gray-text bold-span text-center titulo-pregunta">
                Pregunta 1/20
              </h4>
              <h4 className="gray-text text-center titulo-pregunta">
                ¿Cuál es la capital de México?
              </h4>
              <div className="respuestas-formulario">
                <div className="d-flex flex-column gap-2 mb-2">
                  <div className="col-sm verde respuesta-pregunta d-flex gap-2 shadow">
                    <div className="inciso white-text bold-span">A</div>
                    Culiacán
                  </div>
                  <div className="col-sm verde respuesta-pregunta d-flex gap-2 shadow">
                    <div className="inciso white-text bold-span">B</div>
                    Monterrey
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="col-sm verde respuesta-pregunta d-flex gap-2 shadow">
                    <div className="inciso white-text bold-span">C</div>
                    Guadalajara
                  </div>
                  <div className="col-sm verde respuesta-pregunta d-flex gap-2 shadow">
                    <div className="inciso white-text bold-span">D</div>
                    Ciudad de México
                  </div>
                </div>
              </div>
            </div>
            <button className="green-btn-responder-cuestionario w-100 mt-3">
              Siguiente pregunta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponderCuestionario;
