import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 ms-2 me-6" to={"/home"}>
            Online Library System
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse headerItems"
            id="navbarTogglerDemo02"
          >
            <div>
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/browsebooks"} className="nav-link active">
                    Browse Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/addbook"} className="nav-link active">
                    Add Book
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
