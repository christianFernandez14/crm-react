import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation()

  console.log(location)
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md: w-1/4 bg-blue-600 px-5 py-10">
        <h2 className="text-3xl font-black text-center text-white">CRM - Clientes</h2>

        <nav>
          <Link
            className={`${location.pathname === '/' ? 'text-blue-300': 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300': 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes/nuevo"
          >
            Cliente Nuevo
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>

    </div>
  )
}

export default Layout




//? Trabajando con el hook useLocation
/* 
  1.- Es un hook que trae react-router-dom
  2.- Simplemente lo extrae
  3.- lo declaras y el hook no recibe nada como parametros
  4.- si hace un clg de la variable que declaraste veras que te trae un objeto con info
      en la ruta que te encuentres o que le des click
  5.- Incorporamos un poco de estilo, para resaltar en nav la pagina que no encontramos y eso lo
      hacemos con el pathname (una de las propiedades del objeto)


*/