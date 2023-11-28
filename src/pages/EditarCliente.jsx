import { obtenerCliente, actulizarCliente } from "../api/clientes";
import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

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

export async function action({request, params}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  // Validación:
  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son requeridos')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errores.push('No es un email valido')
  }

  // Retornando datos si hay errores:
  if (Object.keys(errores).length) {
    return errores;
  }

  // Actualizamos la data de cliente:
  await actulizarCliente(params.clienteId, datos)

  return redirect('/')

}

const EditarCliente = () => {

  const navigate = useNavigate()
  const cliente = useLoaderData()
  const errores = useActionData()

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

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form
          method="put"
          noValidate
        >
          <Formulario
            cliente={cliente}
          />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-900 cursor-pointer transition-all"
            value="Guardar Cambios"
          />
        </Form>

      </div>
    </>
  )
}

export default EditarCliente



//? Trabajando con el action, para poder editar lo que me trae el formulario

/* 
  1.- Trabajamos con la misma información que esta en el action de NuevoCliente.jsx

  2.- Todo lo que esta antes de la funcion "obtenerCliente", queda igual, y esta función que acabo
      de mencionar, se le pasar el params, y los datos del formulariopara que pueda trer los datos 
      de ese cliente.

  3.- Ahora bien mi componente (EditarCliente.jsx), tiene que saber que exite un action aca mismo
      y asi poder ejercer su función.
  
  4.- Le decimos al main.jsx en el arbol de las rutas que este componente tiene un action.

  5.- Revisando un poco, nos percatamos que nos genera algunos errores, y es porque no estan importadas
      todas dependencia o propiedades que se requieren para trabajar el fomulario en este componente, como
      redirec, Form, Formulario, Error, entre otras.
  
  6.- Otro dato curioso es que en el "method" (metodo), puede ser en minuscula o mayuscula e igual funciona.

  7.- Dato curioso de esta manera se trabaja actualmente para app web y moviles con un mismo backend
*/
