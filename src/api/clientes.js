

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



//? Trabajando con editar cliente / Actulizando el cliente
/* 
  1.- Se crea un funcion "actulizarCliente", que es la que llevara la logica de la actualización.
  
  2.- Esta funcion recien creada es la vamos usar en el action de de EditarCliente.jsx

  3.- Como veras esta funcion que toma dos parametros, el id (que vendran de params.clienteId) 
     y los datos (son los datos que fueron ingresados en el formulario)

  4.- Muy parecida la logica de agregar cliente, pero lo cambias el la inyeccion de la id y el tipo
      de metodo.

*/