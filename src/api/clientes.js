

export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL)
  const resultado = await respuesta.json()
  return resultado;
}
export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
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

export async function actulizarCliente(id, datos){
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
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

export async function eliminarCliente(id){
  // console.log('Elminando.. ', id)
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE'  

    })
    await respuesta.json()
  } catch (error) {
    console.log(error)
  }


}



//? Eliminando un registro del API
/* 
  1.- Se crea un funcion "actulizarCliente", que es la que llevara la logica de la actualización.
  
  2.- Esta funcion recien creada es la vamos usar en el action de de EditarCliente.jsx

  3.- Como veras esta funcion que toma dos parametros, el id (que vendran de params.clienteId) 
     y los datos (son los datos que fueron ingresados en el formulario)

  4.- Muy parecida la logica de agregar cliente, pero lo cambias el la inyeccion de la id y el tipo
      de metodo.
  
  5.- Hacemos unas pruebas (clg), de que se esten comunicando 

  6.- Ahora si implementamos la logica y este caso se cambia el method, por "delete" y no estaremos
      pasando ni body, ni headers

  7.- Y con esto estariamos listo con nustro REST Api

*/