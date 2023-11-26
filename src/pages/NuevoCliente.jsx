import { useNavigate, Form, useActionData } from "react-router-dom";
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

  // Averiguar por que sin el return me genera un error, en el ejemplo basico de con el CLG
  return null;
}

const NuevoCliente = () => {

  const errores = useActionData()
  const navigate = useNavigate()
  const  infodeAction = useActionData()


  console.log(infodeAction)
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


//? Trabajando con las validaciones del Formualario
/* 
  1.- Veniamos validando todos los campos simultaneos, con include(), dentro de un objeto o array, pero tambien podemos validar
      campos por separados y especifcamente para ese caso, vamos validar que sea un email valido
  2.- Para seguir con el item anterior, obetenemos el valor del email con .get().
  3.- Luego, declaramos una variable Regexp (expresion regular), ya que la validacion de un mail esta compuesto por tres parte, un 
      nombre o usuario, el @ y el dominio (ya que es la mejor forma de validar un mail)
  4.- Luego con un condicional simple, le pasamos un al Regexp un .test, metodo de la expresion regular, para justamente validar o
      testear el eamil, tenga los tres componentes (usuario, @, dominio)
  5.- Haciendo las pruebas nos percatamos que HTML:5, nos genera la validadion por defaul primero que nuestra, por lo tanto se le paso
      como atributo al Form, "noValidate", para que no haga el estrabajo, sino nosotros.
  6.- Pushiamos un nuevo error, para mostrarlo, en caso que no lo cumpla la condición, por eso el "If" lo tenemos como negando
  7.- Y ya tenemos no solo la validación de todos los campos, sino tambien la del mail.
*/