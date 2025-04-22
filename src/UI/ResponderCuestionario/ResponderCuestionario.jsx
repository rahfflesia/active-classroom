import "./respondercuestionario.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ResponderCuestionario() {
  return (
    <>
      <div className="raiz">
        <div className="contenido-principal container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="contenedor-tiempo w-100 d-flex justify-content-between">
            <h3 className="m-0 titulo-formulario white-text bold-span d-flex justify-content-center align-items-center">
              Geografía de México
            </h3>
            <div className="tiempo-restante white-text d-flex justify-content-center align-items-center green-border-bottom">
              <h3 className="m-0 tiempo-restante-interno">
                <strong>60</strong>
              </h3>
            </div>
          </div>
          <div className="contenido-principal-interno container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2 mb-3">
              <h3 className="verde text-center titulo-app-web">
                <strong>ActiveClassroom</strong>
              </h3>
              <h4 className="white-text bold-span text-center titulo-pregunta">
                Pregunta 1/20
              </h4>
              <div className="pregunta-principal green-border-bottom">
                <h4 className="white-text text-center titulo-pregunta m-0 bold-span">
                  ¿Cuál es la capital de México?
                </h4>
              </div>
            </div>
            <div className="responder-cuestionario container-fluid p-0">
              <div className="respuestas-formulario">
                <div className="d-flex gap-2 mb-2 flex-wrap">
                  <div className="col-sm verde bold-span respuesta-pregunta d-flex gap-2 gray-border-bottom shadow w-100">
                    <div className="inciso white-text bold-span">A</div>
                    Culiacán
                  </div>
                  <div className="col-sm verde bold-span respuesta-pregunta d-flex gap-2 gray-border-bottom shadow w-100">
                    <div className="inciso white-text bold-span">B</div>
                    Monterrey
                  </div>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                  <div className="col-sm verde bold-span respuesta-pregunta d-flex gap-2 gray-border-bottom shadow w-100">
                    <div className="inciso white-text bold-span">C</div>
                    Guadalajara
                  </div>
                  <div className="col-sm verde bold-span respuesta-pregunta d-flex gap-2 gray-border-bottom shadow w-100">
                    <div className="inciso white-text bold-span">D</div>
                    Ciudad de México
                  </div>
                </div>
              </div>
            </div>
            <button className="green-btn-responder-cuestionario w-100 mt-3 p-3 green-border-bottom btn-siguiente-pregunta">
              Siguiente pregunta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponderCuestionario;
