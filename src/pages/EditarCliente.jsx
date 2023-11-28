export function loader({params}){

  console.log(params)
  
  return ''
}

const EditarCliente = () => {
  return (
    <div>EditarCliente</div>
  )
}

export default EditarCliente



//? Trabajando con el componete

/* 
  1.- Hicimos como siempre el Snnipet, para trabajar en el componente (page), como un arrow function

  2.- Te estaras preguntando como extraigo el valor de la URL, bueno aca entra de nuevo el loader, para 
      cuando se cargue este componente (recuerdas useEffect = loader)

  3.- Pero el lodaer no funcionara asi como asi, le debes decir al main.jsx que esta un loader en este
      componente (pages), para que puedan trabajar junto y verse.

  4.- Ya con el punto anterior  comunicandose el loader y el componente; le pasamos el valor de "params" 
      que existe en react-router-dom

  6.- Y de esa manera obtienes un obejeto, con la key con el nombre que definiste en el path (clienteId),
      por eso es muy importante que cuando definas la ruta, le coloques nombre representativo; y su valor el que 
      trae cuando le da click alñ boton editar.

*/