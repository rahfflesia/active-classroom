import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow p-3">
        <div className="container-md">
          <div>
            <a className="navbar-brand" href="">
              <strong>ActiveClassroom</strong>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <a href="#" className="nav-link gray-text">
                  Estudiantes
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link gray-text">
                  Profesores
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link gray-text">
                  Inicia sesión
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link gray-text">
                  Acerca de
                </a>
              </li>
            </ul>

            <div className="ms-lg-3 mt-3 mt-lg-0">
              <button type="button" className="btn primary-color-btn">
                <a href="" className="text-white">
                  Regístrate
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
