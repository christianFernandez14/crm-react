import { obtenerCliente } from "../api/clientes";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import Formulario from "../components/Formulario";

export async function loader({ params }) {

  const cliente = await obtenerCliente(params.clienteId)

  // Manejo de error desde el loader:
  if (Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'El cliente no fue encontrado'
    })
  }

  return cliente
}

const EditarCliente = () => {

  const navigate = useNavigate()
  const cliente = useLoaderData()
  // console.log(cliente)

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Clientes</h1>
      <p className="mt-3">A continuación podras modifcar los datos de un cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        {/* {errores?.length && errores.map((error, i)=> <Error key={i}>{error}</Error>) } */}
        <Form
          method="PUT"
          noValidate
        >
          <Formulario
            cliente={cliente}
          />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-900 cursor-pointer transition-all"
            value="Editar Cliente"
          />
        </Form>

      </div>
    </>
  )
}

export default EditarCliente



//? Autocompletando los valores, para Editar

/* 
  1.- Nos copiamos el codigo que salia en el componente Nuevocliente.jsx (solo lo que renderizaba)

  2.- Moficamos algunos cosas para darle aspecto que estaba en editar y no creando uno nuevo.

  3.- Tambien debimos importar algunas cosa, porque sino me genera errores como: (Form, useNavigate,
      Formulario)
  4.- Y como lo que quremos darle una buena experiencia de usarios, lo ideal es que cuando le des "editar"
      algun cliente, este te traiga los datos autocompletados, para que sea el usuario que decisa que 
      modificar.
  5.- Para hacer lo anterior debemos usar useLoaderDate y pasarle lo que hay en loader

  6.- Verificamos que estamos mostrando los datos de loader con un CLG
*/
