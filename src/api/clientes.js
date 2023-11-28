

export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL)
  const resultado = await respuesta.json()

  return resultado;
}

export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}



//? Archivo que manejara todas las acciones de clientes
/* 
  1.- Modificamos la extención, ya que este archivo no es un componente

  2.- Vamos agregar datos a nuestra REST Api, esta funcion debe recibir data

  3.- Vamos manejar errores, en esta peticion, y como podras ver tambien, definimos el tipo de metodo
  
  4.- En la primera funcion no definimo el tipo de metodo 'get', porque por default fetch, trabaja con 'get'

  5.- Regresando a la funcion agregarCliente, a parte del metodo, tambien le vamos a pasar un body.

  6.- Este body, no son mas que los datos que le vamos a pasar al sevidor 

  7.- Tambien el tipo de contenido que le estas pasando ('Content-Type': 'application/json')

  8.- A pesar que utilce AI, para corregir mi codigo, me dio una sugerencia de return en la respuesta
      pero aun asi funcionbien

  

*/