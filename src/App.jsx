import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Productos } from "./components/Productos";
import { NuevoProducto } from "./components/NuevoProducto";
import { EditarProducto } from "./components/EditarProducto";
import { Error404 } from "./components/Error404";
export const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-5">
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Productos />} />
          <Route path="/productos/nuevo" element={<NuevoProducto />} />
          <Route
            exact
            path="/productos/editar/:id"
            element={<EditarProducto />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
