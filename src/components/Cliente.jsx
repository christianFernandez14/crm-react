import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {

  const navigate = useNavigate()

  // console.log(cliente)
  const { id, nombre, empresa, telefono, email } = cliente
  return (
    <>
      <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-gray-800">{nombre}</p>
          <p>{empresa}</p>
        </td>
        <td className="p-6">
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">
              Email:{' '}
            </span>
            {email}
          </p>
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">
              Tel:{' '}
            </span>
            {telefono}
          </p>
        </td>
        <td className="p-6 flex gap-4">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
            onClick={ ()=> navigate(`/clientes/${id}/editar`)}
          >
            editar
          </button>

          <button
            type="button"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            elimninar
          </button>
        </td>
      </tr>
    </>
  )
}

export default Cliente


//? Editando cliente y el uso del hook useParams (Que estas dentro de Loader)
/* 
1.- Como los botones estan vacio (editar y eliminar), es decir no tienen funcionalidad, vamos hacer
    uso del hook navigate, para que me lleve a la pages de Editar Cliente. con el evento onClick.

2.- Obviamente, primero debo importarlo de react-router-dom y pasarselo aun variable, para luego pasarlo
    al evento del onClick

3.- Ahora el valor que lleva "navigate", sera la ruta que definimos para ese pages, y sera una combinación
    de string y variables, ya que vamos inyectar el valor del id, cuando presionemos el boton de "editar"
 

*/