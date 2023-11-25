import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {

  const clientes = [
    {
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: 'Codigo Con Juan'
    },
  ];

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


//? Iterando sobre el State de clientes y mostrando contenido

/* 
  1.- Vamos iterar sobre clientes y lo vamos a renderizar en nuestro componente Index.jsx
  2.- Ya que clientes tiene lo que esta retornando loader gracias al hook "useLoaderData"
      que solo existe en react-router-dom
  3.- En el rederizado de clientes, nos dimos cuenta que es mejor crear un componente
      que lleve todo la data o logica de cliente y asi limpiamos un poco mas Index.jsx
  4.- Importamos el componente (Clientes) y lo renderiamos
  5.- Al componente que estamos renderizando, recuerda que siempre hay que pasarle la key 
      (eso no cambia), para que no te de error en el iteración con el ".map()" y le pasas su 
      estado (state) como props, para que pueda el componente Cliente trabajar con la data.
*/
