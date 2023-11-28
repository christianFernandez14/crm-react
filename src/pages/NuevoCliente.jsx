import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import { agregarCliente } from "../api/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request }) {

  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  // Validación:
  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son requeridos')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errores.push('No es un email valido')
  }

  // Retornando datos si hay errores:
  if (Object.keys(errores).length) {
    return errores;
  }


  await agregarCliente(datos)

  return redirect('/')
}

const NuevoCliente = () => {

  const errores = useActionData()
  const navigate = useNavigate()
  const infodeAction = useActionData()


  // console.log(infodeAction)
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
          noValidate
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


//? Agregando data a nustro REST Api
/* 
  1.- Importamos la funcion que se encargara de ingregar data a nustro REST Api
  
  2.- Llamamos hasta al final del action la funcion "agregarCliente" y si llega hasta ahi, es poque
      paso todas las validaciones
  
  3.- De nuevo me esta generando el error, sino le coloco nada al return, en esta oportunidad en vez de pasarle
      null, le pase un string vacio.

  4.- Hasta aca se comunica bien, la respuesta viene del archivo cliente.js

  5.- Ya avanzado un poco en la explicacion, se recomienda usar en el return redirect, que es nativa de 
      react-router-dom, te podras estar preguntando que tenemos navigate y LINK, que pueden cumplir la misma
      función, la gente react, react recomentas que dentro del "action" o "loader" usas redirect, para botones "navigate"y para enlances en si LINK
  
  6.- Se respondio el problema del return en el action, que siempre debe estar.
*/