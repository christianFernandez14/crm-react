import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error.message)

  return (
    <div className='space-y-8'>
      <h1 className='text-center text-5xl font-extrabold mt-20 text-blue-900'>CRM - CLIENTES</h1>
      <p className='text-center uppercase font-bold'>Hubo un error</p>
      <p className='text-center uppercase text-red-900 font-semibold'>{error.statusText || error.message}</p>

    </div>
  )
}

export default ErrorPage


//? Trabajando con el componente:

/* 

  1.- Como inicialmente manejamos la forma basica de "error.massage", aca podemos condicionarlo con (||)
      para que me pueda trarer la difinición que hice para ese error.
  
  2.- Como extra algunos estilos adionales
*/