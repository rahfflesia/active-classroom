import "bootstrap/dist/css/bootstrap.min.css";
import "./crearcuestionario.css";

export default function VerdaderoFalsoForm() {
  return (
    <div className="d-flex gap-3 flex-wrap mb-3 w-100">
      <div className="col-sm respuesta respuesta-a p-4 gray-border-bottom w-100 d-flex justify-content-between">
        <div className="d-flex gap-3">
          <p className="gray-text m-0">Verdadero</p>
          <input
            type="radio"
            name="respuesta-correcta"
            id="respuesta-correcta"
          />
        </div>
      </div>
      <div className="col-sm respuesta respuesta-b p-4 gray-border-bottom w-100 d-flex justify-content-between">
        <div className="d-flex gap-3">
          <p className="gray-text m-0">Falso</p>
          <input
            type="radio"
            name="respuesta-correcta"
            id="respuesta-correcta"
          />
        </div>
      </div>
    </div>
  );
}
