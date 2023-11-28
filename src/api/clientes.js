

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



//? Trabajando con editar cliente
/* 
  1.- Nos copiamos de la funcion obtenerClientes, por que es practicamente la misma, pero lo hicimos
      algunas moficaciones

  2.- Esa funcion que recien creamos (obtenerCliente) la vamos utilizar en el componente de EditarCliente.jsx
  
  3.- Recuerda que debemos especificarle el metodo, el body y el header

  

*/