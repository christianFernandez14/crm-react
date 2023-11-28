import { obtenerCliente } from "../api/clientes";

export async function loader({params}){

  const cliente = await obtenerCliente(params.clienteId)
  
  // Manejo de error desde el loader:
  if(Object.values(cliente).length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'El cliente no fue encontrado'
    })
  }
  
  return cliente
}

const EditarCliente = () => {
  return (
    <div>EditarCliente</div>
  )
}

export default EditarCliente



//? Trabajando con el componete

/* 
  1.- Importamos la funcion que creamos en cliente.js

  2.- Como la funcion es asincrona, debemos colocarle un await, para que espere un poco la respuesta

  3.- Si por alguna razón introducen algun id desde el url (que no es el deber ser), desde el loader
      puedes tambien manejar los errores
  
  4.- Para que no te envie mensajes de errores nativos de React, tambien los puedes integrar a tu proyecto
      con el componete que ya tenemos de errores
  
  5.- Recuerda que debes pasarle el componente que esta generando el problema, la propiedad "errorElement"
      y como valor el compornente error
*/
