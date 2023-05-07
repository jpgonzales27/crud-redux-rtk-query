import { useState } from "react";
import { useUpdateProductoMutation } from "../store/apis/productosApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const EditarProducto = () => {
  const navigate = useNavigate();
  const { productoEditar } = useSelector((state) => state.producto);

  const [updateProducto] = useUpdateProductoMutation();
  const [producto, guardarProducto] = useState({
    nombre: productoEditar.nombre,
    precio: productoEditar.precio,
  });

  const { nombre, precio } = producto;

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    guardarProducto({
      ...productoEditar,
      [e.target.name]: e.target.value,
    });
  };

  const submitEditarProducto = (e) => {
    e.preventDefault();
    updateProducto(producto);
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};