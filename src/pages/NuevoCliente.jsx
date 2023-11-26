import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Clientes</h1>
      <p className="mt-3">LLena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        
        <Formulario />
        
        <input
          type="submit"
          className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-900 cursor-pointer transition-all"
          value="Registrar Cliente"
        />

      </div>
    </>
  )
}

export default NuevoCliente


//? Trabajando en el Componente
/* 
1.- Importamos el componete Formulario.jsx
2.- Agregamos un boton fuera del componente, con sus respectivos estilos.

*/