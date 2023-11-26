import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request }) {

  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  // Validación:
  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son requeridos')
  }

  // Retornando datos si hay errores:
  if (Object.keys(errores).length) {
    return errores;
  }

  // Averiguar por que sin el return me genera un error, en el ejemplo basico de con el CLG
  // return null;
}

const NuevoCliente = () => {

  const errores = useActionData()
  const navigate = useNavigate()


  // console.log(errores)
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

        {errores?.length && errores.map((error, i)=> <Error key={i}>{error}</Error>) }
        <Form
          method="POST"
        >
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-900 cursor-pointer transition-all"
            value="Registrar Cliente"
          />
        </Form>

      </div>
    </>
  )
}

export default NuevoCliente


//? Trabajando con las validaciones del Formualario
/* 
  1.- Como sabemos formData desde el action, va contener toda la información que el usuario instroduzca en el formulario
  2.- En ese mismo lugar (action), seria ideal tambien manejar las validaciones del formulario.
  3.- De las tres maneras que vimos para debuguiar la data, nos quedamos Object.fromEntries(), y asi nos aseguramos de trabajar
      con objetos y podemos aplicar validaciones; digamos de una manera más sencilla. 
  4.- Validando un poco, usamos la propiedad values() del Object, para verificar si incluye alguno vacio.
  5.- Pushiamos (como no es un State, podemos mutar los valores), en una array de errores que definos un poco más arriba, para que manejemos
      los errores 
  6.- Nos preguntamos, como obtenmos el error que nos arrajo o como lo renderizamos, ya que tenemos dos funciones distintas, una es el action
      y la otra es el componente en si.
  7.- Para eso validamos si el array de errores que declaramos, tiene algo y retornamos ese arreglo.
  8.- Y la manera de como acceder a ese arreglo es por medio de un hook ( "useActionData"), que te permite acceder a lo que hay dentro 
      del action
  9.- Este hook lo debes importar de react-router-dom, asignarle el hook a una variable y de esta manera obtenemos en nuestro componente lo
      que esta en el action.
  10.- Lo renderiazamos antes del componente (Form)
  11.- En el renderizado, nos percatamos que nos trae undefined un par de veces la data de erroes, por lo tanto usamos
       el "optinal chaning", para comprobar primero si hay info y luego vemos si tiene elementos ese array, iteramos sobre el.
  12.- Pero antes importamos el componente Error.jsx, para poder utilizarlo.
  13.- El componente anterior es el que colocamos en la iteración, y le pasamos com key el indice que maneja ese error, no se recomienda
       usar el inice de un array como key, pero para este caso, este dato (el valor de error), no va a cambiar, por lo tanto podemos usar el indice como key
*/