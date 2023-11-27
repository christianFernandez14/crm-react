import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from '../api/clientes'
import Cliente from "../components/Cliente";

export function loader() {

  // Caso curioso:
  // return obtenerClientes()

  const clientes = obtenerClientes()

  return clientes;
}


const Index = () => {

  const clientes = useLoaderData()


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Accinoes</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente
                key={cliente.id}
                cliente={cliente}
              />

            ))}
          </tbody>

        </table>

      ) : (
        <p className="text-center mt-10">No hay clientes aun</p>
      )}
    </>

  )
}

export default Index


//? Accienndo a la variable de entorno

/* 
  1.- Sacamos el contenido duro que estaba en el loader, para consumir la api desde ahi, recuerda
      que es el lugar ideal para hacerlo, ya que al cargar este componente se cargara lo que vamos
      consumir de la API.
  2.- Para acceder a lo que esta dentro de .env (variables de entorno, hacemos uso de un metodo .meta)

  3.- Importamos la funcion en llave, ya que fue exportada de forma nombrada, se lo asignamos a una variable
      y la  retormamos y veras el mismo resultado que teniamos desde codigo duro en el  mismo loader
  
  4.- Caso curioso, si retornas la funcion directamente, no hay problema igual me muestra lo que hay en la api
*/
