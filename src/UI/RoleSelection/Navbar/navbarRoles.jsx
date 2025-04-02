import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const toCodigo = () => {
    navigate("/codigo");

  };

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



            <div className="ms-lg-3 mt-3 mt-lg-0">
              <button
                type="button"
                className="btn primary-color-btn"
                onClick={toCodigo}
              >
                Unete a una clase
              </button>
            </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
