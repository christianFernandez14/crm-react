import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";

export async function action({ request }) {

  const formData = await request.formData()

  /* Los datos estaran en formData */

  // 5
  // console.log(formData.get('nombre'))

  // 6
  // console.log([...formData])

  // 7
  const datos = Object.fromEntries(formData)
  console.log(datos)


  // Averiguar por que sin el return me genera un error, en el ejemplo basico de con el CLG
  return null;
}

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


//? Leyendo la info que se pasa por el formulario
/* 
1.- Hasta este minutos tenesmo formas y pasos a seguir, para trabajar con todas las propiedades que nos trae las nuevas
    versiones de react-router-dom, y el action no sera un excepcion. 
2.- Ya con el "action" valindando lo que va hacer el form, lueo de darle al boton submit, a esa funcion siempre se le 
    pasa un "request" (petición) y Si se le haces un CLG a ese "request" veras que te trae un objeto (Request), con muchas 
    propiedades.
3.- Si te vas al prototype del objeto, veras que existe una porpiedad que se llama "formData" y es a traves de el que  
    accederemos a la info que sumnistren en el formulario.
4.- Ahora modifiacamos un pocon la función, ya que esa petición puede tardar un poco (async await).
5.- Podemos acceder a los valores utilizando metodos propios de FormData, por ejemplo .get() y le pasa el nombre de la propiedad
    que definiste en el objeto.
6.- Tambien podemos acceder a el haciendo una copia de lo que hay en FormData ([...formData]) y me traeria un arreglo, donde cada
    elemento de ese arreglo es un arreglo, par (propiedad, valor) como string, a lo que le llamamos un Spread Operetors.
7.- Y una tercera manera de manejar la data que se envia por el formulario, es asigandolo a un Object y usando su propiedad
    fromEntries(), pasandole a ese metodo, lo que trajo fromData, dando como resultado un obejeto organizado con el nombre
    del campo y el valor que coloca el usuario en el input.
*/