import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <NavLink to="/" className="text-light">
            CRUD - React, Redux con RTK query
          </NavLink>
        </h1>
      </div>
      <NavLink
        to="/productos/nuevo"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        Agregar Producto &#43;
      </NavLink>
    </nav>
  );
};
