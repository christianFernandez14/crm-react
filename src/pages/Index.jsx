import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from '../api/clientes';
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


//? Agregando data a mi REST Api (Esto es el componente NuevoCliente)

/* 
  1.- 
*/
