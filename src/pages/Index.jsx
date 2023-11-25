export function Loader() {

  return 'Desde el louder'
}


const Index = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
    </>

  )
}

export default Index


//? Trabajando con el page y Loader

/* 
  1.- Creamos algunas etiquetas con algunos estilos y todo dentro de un fragment
  2.- react-router-dom, trabaja con state propios, es decir no es necesario usar el useState
  3.- Para esto debemo exportar un funcion que se llama "louder" y se recomienda que este
      en el mismo componente
  4.- Como estamos en el page que manejara los clientes usualmente usariamos un useState, que 
      lo trairiamos de alguna Api, o algun archivo de prueba dentro de tu proyecto, y se mostraria
      gracias al useEffect, sea una vez o si apunta alguna dependecia
  5.- Desde la version 6.4 de react-router-dom, te permite trabajar con loader
  6.- Es muy similar al useEffect, ya que es una funcion que se va a ejecutar cuando el componente
      cargue, por lo tanto es ideal para cargar un state o consultar una API y mosrar el resultado 
      en un componente
  7.- El loader, siempre va retornar algo, ya que de lo contrario no funcionara
  8.- Si te fijas bien , el loader lo estas EXPORTANDO, en el componente donde lo vas usar.
  9.- Para eso debes ir al main.jsx


*/
