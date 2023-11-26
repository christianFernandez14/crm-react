import React from 'react'

const Error = ({ children }) => {
  return (
    <div className='text-center my-4 bg-red-600  text-white font-bold p-3 uppercase'>
      {children}
    </div>
  )
}

export default Error


//? Crenado el componente
/* 
  1.- Utilizamos el snnipet rafce, para que nos traiga el componente en forma de arrow function
  2.- Utilizamos un pase de informción como children
  3.- le damos algunos estilos

*/