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
import { useNavigate } from "react-router-dom";
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
import iconoPerfil from "../../../public/iconos/user.png";
import iconoEliminar from "../../../public/iconos/delete-icon.png";
import iconoAgregar from "../../../public/iconos/add-icon.png";
import iconoExportar from "../../../public/iconos/export-icon.png";
import iconoAyuda from "../../../public/iconos/help-icon.png";
import { useRef, useState } from "react";
import fotoPerfilDummy from "../../../public/iconos/ye.jpg";

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
  const dialogRef = useRef(null);

  const abrirDialogExportar = () => {
    dialogRef.current.showModal();
  };

  const cerrarDialogExportar = () => {
    dialogRef.current?.close();
  };

  const dialogEliminar = useRef(null);

  const abrirDialogEliminar = () => {
    dialogEliminar.current.showModal();
  };

  const cerrarDialogEliminar = () => {
    dialogEliminar.current?.close();
  };

  const dialogAyuda = useRef(null);

  const abrirDialogAyuda = () => {
    dialogAyuda.current.showModal();
  };

  const cerrarDialogAyuda = () => {
    dialogAyuda.current?.close();
  };

  const fecha = new Date();
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fechaLocal = fecha.toLocaleDateString("es-MX", opciones);

  const navigate = useNavigate();

  const toCrearCuestionario = () => {
    navigate("/crearcuestionario");
  };

  const [visible, setVisible] = useState(false);
  const toggleDropdown = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="raiz-dashboard-grafica">
        <dialog
          className="dialog-exportar centrar-dialog circular p-4"
          ref={dialogRef}
          style={{ margin: "0 auto", top: "22%" }}
        >
          <p className="verde bold-span text-left">Menú de exportación</p>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column gap-1">
              <span className="bold-span gray-text">
                Selecciona el cuestionario a exportar
              </span>
              <select name="" id="" className="gray-text select-cuestionario">
                <option value="cuestionario-uno">Cuestionario 1</option>
                <option value="cuestionario-dos">Cuestionario 2</option>
                <option value="cuestionario-tres">Cuestionario 3</option>
                <option value="cuestionario-cuatro">Cuestionario 4</option>
              </select>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="bold-span gray-text">
                Selecciona el formato de exportación
              </span>
              <select name="" id="" className="gray-text select-cuestionario">
                <option value="pdf">PDF</option>
                <option value="csv">CSV</option>
                <option value="xlsx">XLSX</option>
              </select>
            </div>
            <div className="botones-exportar d-flex gap-2">
              <button className="green-btn-cuestionario green-border-bottom">
                Exportar
              </button>
              <button
                className="white-btn-cuestionario gray-border-bottom"
                onClick={cerrarDialogExportar}
              >
                Cerrar
              </button>
            </div>
          </div>
        </dialog>
        <dialog
          className="dialog-exportar circular p-4"
          ref={dialogEliminar}
          style={{ margin: "0 auto", top: "30%" }}
        >
          <p className="verde bold-span text-left">Eliminar cuestionario</p>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column gap-1">
              <span className="bold-span gray-text">
                Selecciona el cuestionario a eliminar
              </span>
              <select name="" id="" className="gray-text select-cuestionario">
                <option value="cuestionario-uno">Cuestionario 1</option>
                <option value="cuestionario-dos">Cuestionario 2</option>
                <option value="cuestionario-tres">Cuestionario 3</option>
                <option value="cuestionario-cuatro">Cuestionario 4</option>
              </select>
            </div>
            <div className="botones-exportar d-flex gap-2">
              <button className="green-btn-cuestionario green-border-bottom">
                Eliminar
              </button>
              <button
                className="white-btn-cuestionario gray-border-bottom"
                onClick={cerrarDialogEliminar}
              >
                Cerrar
              </button>
            </div>
          </div>
        </dialog>
        <dialog
          className="dialog-exportar centrar-dialog circular p-4"
          ref={dialogAyuda}
          style={{ margin: "0 auto", top: "11%" }}
        >
          <p className="verde bold-span text-left m-0">Sección de ayuda</p>
          <span className="bold-span gray-text mb-3">
            Funcionamiento de los botones
          </span>
          <div className="d-flex flex-column gap-2">
            <div className="contenedor-seccion-ayuda">
              <span className="verde bold-span">Perfil: </span>
              <span className="gray-text bold-span">
                el botón de perfil muestra información breve sobre tu cuenta de
                usuario, también proporciona la opción de cerrar sesión.
              </span>
            </div>
            <div className="contenedor-seccion-ayuda">
              <span className="verde bold-span">Agregar: </span>
              <span className="gray-text bold-span">
                el botón de agregar te permite crear un nuevo cuestionario, te
                redirige a la sección correspondiente para la creación de este.
              </span>
            </div>
            <div className="contenedor-seccion-ayuda">
              <span className="verde bold-span">Eliminar: </span>
              <span className="gray-text bold-span">
                el botón de eliminar mostrará un pequeño menú donde deberás
                seleccionar el cuestionario a eliminar.
              </span>
            </div>
            <div className="contenedor-seccion-ayuda">
              <span className="verde bold-span">Exportar: </span>
              <span className="gray-text bold-span">
                el botón de exportar mostrará un pequeño menú donde deberás
                seleccionar el cuestionario del cual quieres exportar los datos
                así como el formato de exportación.
              </span>
            </div>
          </div>
          <div className="botones-exportar mt-2">
            <button
              className="white-btn-cuestionario gray-border-bottom"
              onClick={cerrarDialogAyuda}
            >
              Cerrar
            </button>
          </div>
        </dialog>
        <div className="container-fluid p-0 cont">
          <div className="row raiz-cuestionarios-estadisticas m-0">
            <div className="col-lg-1 p-2 barra-lateral d-flex flex-column justify-content-center align-items-center shadow">
              <div className="contenedor-iconos d-flex flex-column align-items-center gap-5">
                <div className="d-flex flex-column justify-content-center align-items-center icono-barra-lateral foto-perfil contenedor-icono-interno">
                  <img
                    src={iconoPerfil}
                    alt="icono-perfil"
                    width={"40px"}
                    height={"40px"}
                    className="scale pointer"
                    onClick={toggleDropdown}
                  />
                  <p className="white-text bold-span titulo-icono text-center">
                    Perfil
                  </p>
                  {visible && (
                    <div className="info-perfil circular p-3 d-flex flex-column gap-2">
                      <div className="info-usuario d-flex gap-2">
                        <div className="foto">
                          <img
                            src={fotoPerfilDummy}
                            alt="foto-perfil"
                            className="imagen-perfil w-100"
                          />
                        </div>
                        <span className="gray-text bold-span d-flex justify-content-center align-items-center">
                          xPeenPapi
                        </span>
                      </div>
                      <button className="btn-cerrar-sesion white-text bold-span circular scale">
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center contenedor-icono-interno">
                  <img
                    src={iconoAgregar}
                    alt="icono-agregar"
                    width={"40px"}
                    height={"40px"}
                    className="scale pointer"
                    onClick={toCrearCuestionario}
                  />
                  <p className="white-text bold-span titulo-icono text-center">
                    Agregar
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column contenedor-icono-interno">
                  <img
                    src={iconoEliminar}
                    alt="icono-eliminar"
                    width={"40px"}
                    height={"40px"}
                    className="scale pointer"
                    onClick={abrirDialogEliminar}
                  />
                  <p className="white-text bold-span titulo-icono text-center">
                    Eliminar
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column contenedor-icono-interno">
                  <img
                    src={iconoExportar}
                    alt="icono-exportar"
                    width={"40px"}
                    height={"40px"}
                    className="scale pointer"
                    onClick={abrirDialogExportar}
                  />
                  <p className="white-text bold-span titulo-icono text-center">
                    Exportar
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column contenedor-icono-interno">
                  <img
                    src={iconoAyuda}
                    alt="icono-ayuda"
                    width={"40px"}
                    height={"40px"}
                    className="scale pointer"
                    onClick={abrirDialogAyuda}
                  />
                  <p className="white-text bold-span titulo-icono text-center">
                    Ayuda
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 seccion-cuestionarios clase-prueba p-4">
              <p className="white-text bold-span mb-3">Cuestionarios</p>
              <div className="d-flex flex-column gap-3 seccion-cuestionario-interno">
                <div className="contenedor-cuestionarios">
                  <div className="elemento-cuestionario circular pointer p-3">
                    <p className="white-text bold-span m-0">Cuestionario 1</p>
                    <span className="white-text">Creado el 01/05/2025</span>
                  </div>
                </div>
                <div className="contenedor-cuestionarios">
                  <div className="elemento-cuestionario circular pointer p-3">
                    <p className="white-text bold-span m-0">Cuestionario 2</p>
                    <span className="white-text">Creado el 02/05/2025</span>
                  </div>
                </div>
                <div className="contenedor-cuestionarios">
                  <div className="elemento-cuestionario circular pointer p-3">
                    <p className="white-text bold-span m-0">Cuestionario 3</p>
                    <span className="white-text">Creado el 03/05/2025</span>
                  </div>
                </div>
                <div className="contenedor-cuestionarios">
                  <div className="elemento-cuestionario circular pointer p-3">
                    <p className="white-text bold-span m-0">Cuestionario 4</p>
                    <span className="white-text">Creado el 04/05/2025</span>
                  </div>
                </div>
                <div className="contenedor-cuestionarios">
                  <div className="elemento-cuestionario circular pointer p-3">
                    <p className="white-text bold-span m-0">Cuestionario 5</p>
                    <span className="white-text">Creado el 04/05/2025</span>
                  </div>
                </div>
                <div className="contenedor-cuestionarios">
                  <div className="elemento-cuestionario circular pointer p-3">
                    <p className="white-text bold-span m-0">Cuestionario 6</p>
                    <span className="white-text">Creado el 04/05/2025</span>
                  </div>
                </div>
                <div className="contenedor-cuestionarios">
                  <div className="elemento-cuestionario circular pointer p-3">
                    <p className="white-text bold-span m-0">Cuestionario 7</p>
                    <span className="white-text">Creado el 04/05/2025</span>
                  </div>
                </div>
                <div className="contenedor-cuestionarios">
                  <div className="elemento-cuestionario circular pointer p-3">
                    <p className="white-text bold-span m-0">Cuestionario 8</p>
                    <span className="white-text">Creado el 04/05/2025</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 contenedor-seccion-estadisticas-2 p-0">
              <div className="seccion-estadisticas p-4">
                <div className="seccion-estadisticas-interno">
                  <div className="titulos-cuestionario">
                    <h3 className="verde bold-span">ActiveClassroom</h3>
                    <p className="titulo-cuestionario text-center gray-text bold-span">
                      Nombre del cuestionario
                    </p>
                  </div>
                  <div className="contenedor-fecha d-flex justify-content-between">
                    <p className="bold-span">Estadísticas del formulario</p>
                    <p className="gray-text bold-span">{fechaLocal}</p>
                  </div>
                  <div className="contenedor-graficas row m-0 mb-4 gap-4">
                    <div className="col-sm sombra-graficas circular carta-grafica p-3">
                      <p className="verde bold-span text-left p-0">
                        Tiempo promedio por pregunta
                      </p>
                      <div className="contenedor-grafica">
                        <Line data={datosGraficaLinea}></Line>
                      </div>
                    </div>
                    <div className="col-sm sombra-graficas circular carta-grafica p-3">
                      <p className="verde bold-span text-left">Preguntas</p>
                      <div className="contenedor-grafica-pie">
                        <Pie data={datosPie} />
                      </div>
                    </div>
                  </div>
                  <div className="contenedor-graficas row m-0 gap-4">
                    <div className="col-sm sombra-graficas circular carta-grafica p-3">
                      <p className="verde bold-span text-left">
                        Preguntas con mayor índice de error
                      </p>
                      <div className="contenedor-grafica">
                        <Bar data={datosErrorPregunta}></Bar>
                      </div>
                    </div>
                    <div className="col-sm sombra-graficas carta-grafica circular p-3">
                      <p className="verde bold-span text-left">
                        Relación entre tiempo y puntuación
                      </p>
                      <div className="contenedor-grafica">
                        <Scatter data={datosScatter}></Scatter>
                      </div>
                    </div>
                    <div className="col-sm sombra-graficas carta-grafica circular p-3">
                      <p className="verde bold-span text-left">
                        Alumnos con 50% o menos aciertos
                      </p>
                      <div className="contenedor-grafica">
                        <Bar data={datosBarra} />
                      </div>
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
