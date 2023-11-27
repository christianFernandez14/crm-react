import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error.message)

  return (
    <div className='space-y-8'>
      <h1 className='text-center text-5xl font-extrabold mt-20 text-blue-900'>CRM - CLIENTES</h1>
      <p className='text-center'>Hubo un error</p>
      <p className='text-left'>{error.message}</p>

    </div>
  )
}

export default ErrorPage


//? Trabajando con el componente:

/* 

  1.- Como siempre el Snnipet, para crear el componente
  2.- Este componente es creado, para manejar las paginas de los errores y en particular los errores
      que me  genera React, por algun tipo de sintaxis, en este caso particular, cuando se te olvida
      pasarle el return a loader.
  3.- Lo anterior se le llama Error Boundaries, No son más que componetes de React que obtienen los errores, 
      en cualquier lugar del componente, en este caso en particular lo esta obteniendo del loader, por la
      falta del return

  4.- Es importante aclarar que es parte de React, no react-router-dom

  5.- Para obtener el error hacemos uso del hook "useRouteError"

  6.- De esta manera integramos mas a nuestro proyectos mensajes con una mejor experciencia de usuario.

*/