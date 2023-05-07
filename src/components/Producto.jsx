import PropTypes from "prop-types";
import { useDeleteProductoMutation } from "../store/apis/productosApi";
import { useDispatch } from "react-redux";
import { obtenerProductoEditar } from "../store/slices/productoSlice";
import { useNavigate } from "react-router-dom";

export const Producto = ({ producto }) => {
  const [deleteProducto] = useDeleteProductoMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // función que redirige de forma programada
  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEditar(producto));
    navigate(`/productos/editar/${producto.id}`);
  };

  const { nombre, precio, id } = producto;
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold"> $ {precio} </span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redireccionarEdicion(producto)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteProducto(id)}
        >
          Eliminar{" "}
        </button>
      </td>
    </tr>
  );
};

Producto.propTypes = {
  producto: PropTypes.object.isRequired,
};
