

export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL)
  const resultado = await respuesta.json()

  return resultado
}

//? Archivo que manejara todas las acciones de clientes
/* 
  1.- En cada una  de las funciones (que seran las acciones - editar, crear, eliminar) usaremos
      async await con fetch, para esperar la respuesta

  2.- Trabajaremos con variables de entorno, son variables que tendrn valores distinto, es decir
      en el desarrollo tendra un valor y en el producción tendra otro 
  
  3.- Estas variables estaran en un archivo (.env) que estara en la raiz principal de tu proyecto

  4.- Otro caso particular, es VITE, requieres que esas varaibles de entorno sean nombradas con
      VITE_  por delante la nombre que le asignaras, para que la pueda reconocer

*/