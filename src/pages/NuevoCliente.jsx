import { useNavigate, Form } from "react-router-dom";
import Formulario from "../components/Formulario";

export function action() {

  console.log('Submit al formulario...')
  
  // return null;
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


//? Lo nuevo para el manejo de actiones con los formularioas
/* 
1.- Anteriormente nosotros para prevenir que acciones del formulario o trabajar con formularios controlados, en la
    etiqueta <form>, manejamos un evento (onSubmint), y a este le asociabamos una función (handleSubmit), que luego
    la declaramos fuera del return, para nosotros controlar la accion del formulario, a eso le llamabamos formularios
    controlados.
2.- Ahora con la nuevas versiones del react-router-dom (affter V6.4.0), ya no es necesario hacer el item anterios, ya
    el maneja solicitudes Http (post, get(como el loader))
3.- Ok, ahora si; react-rouer-dom incorporo un componeten (Form), que sustituira el tag <form> y este componente lo extraes
    de esta misma dependencia.
4.- Debes definirle que tipo de "metodo" http tendra, que normalment los formularios son de tipo post, ya que envia información.
5.- tambien tendran otro atributo que es la "action" (no es más que un archivo o un url, donde se envia los dato), 
    pero la vamos a trabajar como una funcion, tal cual como trabajamos el loader, por lo tanto es tarea de react-router-dom
    del envio del formulario.
6.- Siendo lo que dice el item anterior, te debes estar preguntando como el formulario sabe de ese "action"
7.- Para esto debes ir al main.jsx, importarlo, pasarselo el elemento que lo requiere (page NuevoCliente) y ahi justo ahi es 
    que lo puede utlizar en esta page, ya que el formulario lo reconocera al hacer click el boton submit
8.- Como repaso: Utliza Loader (para obtener datos de una API o de un objeto, que es lo que venias haciendo con un State)
    y utiliza Action (para procesar entradas de datos de un formulario (Form))

*/