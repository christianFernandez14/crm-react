import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md: w-1/4 bg-blue-600 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>

    </div>
  )
}

export default Layout




//? Trabajando con el Componente Parte #1
/* 
Este diseño tendra un barra lateral a la izquierda y a la derecha un contenido principal
  1.- Comenzamos con algunas clases en el div principal, donde de doy un display flex (md:flex)
      y total de altura  de la pantalla (md:min-h-screen)
  2.- El segundo contenedor (aside), maneja una columna de 4 (md: w-1/4), con un fon azul, 
      un padding
      horizontal 20px y veritcal de 40px (la manera de saber cuantos px son, te posicionas con
      el cursor en la clase y te da la referecnia del css que se le esta aplicando)
  3.- El contenido princiapl (main), maneja el resto de las columnas disponibles, con padding 
      en todos los lados 40px, toma el 100% de la pantalla, y esta parte esta habilitada el scroll
      y dentro de el colocamos el Componente especial (Outlet), para que se vayan inyectando 
      aquellos pages, que tenemos ya y la que diseñaremos.

  4.-Le dimos un tiutlo principal con algunas clases que menajan un estilos css 


*/