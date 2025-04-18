import "./respondercuestionario.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ResponderCuestionario() {
  return (
    <>
      <div className="raiz">
        <div className="raiz-2 transparent container-fluid d-flex justify-content-center align-items-center">
          <div className="contenido-principal">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <h3 className="white-text text-center titulo-app-web">
                <strong>ActiveClassroom</strong>
              </h3>
              <div className="tiempo-restante white-text d-flex justify-content-center align-items-center">
                <h3 className="m-0">
                  <strong>30</strong>
                </h3>
              </div>
            </div>
            <div className="responder-cuestionario">
              <h4 className="white-text bold-span text-center titulo-pregunta">
                Pregunta 1
              </h4>
              <h4 className="white-text text-center titulo-pregunta">
                <strong>¿Cuál es la capital de México?</strong>
              </h4>
              <div className="respuestas-formulario">
                <div className="d-flex gap-2 mb-2">
                  <div className="col-sm white-text respuesta-pregunta d-flex gap-2">
                    <div className="inciso white-text bold-span">A</div>
                    Culiacán
                  </div>
                  <div className="col-sm white-text respuesta-pregunta d-flex gap-2">
                    <div className="inciso white-text bold-span">B</div>
                    Monterrey
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div className="col-sm white-text respuesta-pregunta d-flex gap-2">
                    <div className="inciso white-text bold-span">C</div>
                    Guadalajara
                  </div>
                  <div className="col-sm white-text respuesta-pregunta d-flex gap-2">
                    <div className="inciso white-text bold-span">D</div>
                    Ciudad de México
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponderCuestionario;
