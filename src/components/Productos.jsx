import { useGetProductosQuery } from "../store/apis/productosApi";
import { Producto } from "./Producto";

export const Productos = () => {
  const { data: productos, isLoading, isError, error } = useGetProductosQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </>
  );
};
