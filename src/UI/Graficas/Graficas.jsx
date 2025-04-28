import "bootstrap/dist/css/bootstrap.min.css";
import "./graficas.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Pie, Bar, Scatter, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const datosPie = {
  labels: ["Correctas", "Incorrectas", "Sin responder"],
  datasets: [
    {
      label: "Respuestas del cuestionario",
      data: [12, 5, 3],
      backgroundColor: [
        "rgb(48, 193, 130)",
        "rgb(255, 99, 132)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const datosBarra = {
  labels: ["José", "Jorge", "Carmen", "Rubén", "Alondra", "Eduardo", "Lucía"],
  datasets: [
    {
      label: "Número de aciertos",
      data: [5, 7, 8, 9, 9, 9, 9],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const datosErrorPregunta = {
  labels: [
    "Pregunta 1",
    "Pregunta 7",
    "Pregunta 9",
    "Pregunta 13",
    "Pregunta 17",
    "Pregunta 19",
    "Pregunta 20",
  ],
  datasets: [
    {
      label: "Porcentaje de error",
      data: [0.5, 0.6, 0.77, 0.79, 0.82, 0.9, 0.93],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const datosScatter = {
  datasets: [
    {
      label: "Tiempo en relación a aciertos",
      data: [
        { x: 5, y: 60 }, // X -> Tiempo que tardó en minutos, Y -> Porcentaje de aciertos
        { x: 10, y: 80 },
        { x: 3, y: 40 },
        { x: 7, y: 70 },
        { x: 8, y: 90 },
        { x: 4, y: 90 },
        { x: 1, y: 10 },
        { x: 2, y: 45 },
        { x: 6, y: 65 },
        { x: 11, y: 85 },
      ],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

const datosGraficaLinea = {
  labels: [
    "Pregunta 1",
    "Pregunta 2",
    "Pregunta 3",
    "Pregunta 4",
    "Pregunta 5",
    "Pregunta 6",
    "Pregunta 7",
    "Pregunta 8",
    "Pregunta 9",
    "Pregunta 10",
    "Pregunta 11",
    "Pregunta 12",
    "Pregunta 13",
    "Pregunta 14",
    "Pregunta 15",
    "Pregunta 16",
    "Pregunta 17",
    "Pregunta 18",
    "Pregunta 19",
    "Pregunta 20",
    "Pregunta 21",
    "Pregunta 22",
    "Pregunta 23",
    "Pregunta 24",
    "Pregunta 25",
    "Pregunta 26",
    "Pregunta 27",
    "Pregunta 28",
    "Pregunta 29",
    "Pregunta 30",
    "Pregunta 31",
    "Pregunta 32",
    "Pregunta 33",
    "Pregunta 34",
    "Pregunta 35",
    "Pregunta 36",
    "Pregunta 37",
    "Pregunta 38",
    "Pregunta 39",
    "Pregunta 40",
    "Pregunta 41",
    "Pregunta 42",
    "Pregunta 43",
    "Pregunta 44",
    "Pregunta 45",
    "Pregunta 46",
    "Pregunta 47",
    "Pregunta 48",
    "Pregunta 49",
    "Pregunta 50",
  ],
  datasets: [
    {
      label: "Tiempo promedio por pregunta (segundos)",
      data: [
        103, 14, 55, 72, 67, 41, 99, 24, 90, 25, 53, 102, 20, 71, 79, 44, 17,
        115, 67, 28, 113, 104, 52, 75, 105, 61, 114, 12, 78, 89, 58, 21, 53, 42,
        102, 35, 86, 78, 75, 21, 31, 27, 41, 104, 48, 27, 118, 23, 75, 115,
      ],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.3,
    },
  ],
};

export default function Graficas() {
  return (
    <>
      <div className="raiz-graficas container-fluid p-0">
        <div className="fondo-negro-graficas">
          <div className="contenedor-estadisticas d-flex justify-content-center align-items-center flex-column p-3">
            <div className="main-content">
              <h3 className="bold-span verde">ActiveClassroom</h3>
              <h3 className="bold-span white-text text-center">
                Estadísticas finales
              </h3>
              <div className="contenedor-estadisticas-interno container p-0 container-fluid">
                <div className="row mb-2 gap-2">
                  <div className="col contenedor-grafica-estadistica p-3 izq gray-border-bottom">
                    <h4 className="text-center verde bold-span">Preguntas</h4>
                    <div className="grafica-preguntas">
                      <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                        <Pie data={datosPie} />
                      </div>
                    </div>
                  </div>
                  <div className="col contenedor-grafica-estadistica p-3 gray-border-bottom d-flex justify-content-center align-items-center flex-column">
                    <h4 className="text-center verde bold-span">
                      Alumnos con 50% o menos aciertos
                    </h4>
                    <div className="grafica-barra-errores w-100 d-flex justify-content-center align-items-center">
                      <div
                        className="w-100"
                        style={{
                          margin: "0 auto",
                          overflowX: "auto",
                        }}
                      >
                        <Bar data={datosBarra} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2 gap-2">
                  <div className="col contenedor-grafica-estadistica p-3 izq gray-border-bottom d-flex justify-content-center align-items-center flex-column w-100">
                    <h4 className="text-center verde bold-span">
                      Preguntas con mayor índice de error
                    </h4>
                    <div
                      className="w-100"
                      style={{
                        margin: "0 auto",
                        overflowX: "auto",
                      }}
                    >
                      <Bar data={datosErrorPregunta} />
                    </div>
                  </div>
                  <div className="col contenedor-grafica-estadistica p-3 gray-border-bottom">
                    <h4 className="text-center verde bold-span">
                      Relación entre tiempo y puntuación
                    </h4>
                    <div
                      className="w-100"
                      style={{
                        margin: "0 auto",
                        overflowX: "auto",
                      }}
                    >
                      <Scatter data={datosScatter} />
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col contenedor-grafica-estadistica p-3 gray-border-bottom">
                    <h4 className="text-center verde bold-span">
                      Tiempo promedio por pregunta
                    </h4>
                    <div
                      className="w-100"
                      style={{
                        margin: "0 auto",
                        overflowX: "auto",
                      }}
                    >
                      <Line data={datosGraficaLinea} />
                    </div>
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
