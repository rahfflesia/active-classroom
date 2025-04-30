import "bootstrap/dist/css/bootstrap.min.css";
import "./crearcuestionario.css";

export default function QuizForm() {
  return (
    <div className="seccion-preguntas">
      <div className="d-flex gap-3 flex-wrap mb-3 w-100">
        <div className="col-sm respuesta respuesta-a p-4 bold-span gray-border-bottom w-100 d-flex">
          <input
            type="text"
            placeholder="Respuesta 1"
            className="w-100 input-respuesta input-a"
          />
          <input
            type="radio"
            name="respuesta-correcta"
            id="respuesta-correcta"
          />
        </div>
        <div className="col-sm respuesta respuesta-b p-4 bold-span gray-border-bottom w-100 d-flex">
          <input
            type="text"
            placeholder="Respuesta 2"
            className="w-100 input-respuesta input-b"
          />
          <input
            type="radio"
            name="respuesta-correcta"
            id="respuesta-correcta"
          />
        </div>
      </div>
      <div className="d-flex gap-3 flex-wrap">
        <div className="col-sm respuesta respuesta-c p-4 bold-span gray-border-bottom w-100 d-flex">
          <input
            type="text"
            placeholder="Respuesta 3"
            className="w-100 input-respuesta input-c"
          />
          <input
            type="radio"
            name="respuesta-correcta"
            id="respuesta-correcta"
          />
        </div>
        <div className="col-sm respuesta respuesta-d p-4 bold-span gray-border-bottom w-100 d-flex">
          <input
            type="text"
            placeholder="Respuesta 4"
            className="input-respuesta input-d w-100"
          />
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
