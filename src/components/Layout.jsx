import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md: w-1/4 bg-blue-600 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>

        <nav>
          <Link
            className="text-2xl block mt-2 hover:text-blue-300 text-white"
            to="/"
          >
            Clientes
          </Link>
          <Link
            className="text-2xl block mt-2 hover:text-blue-300 text-white"
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




//? Incorporando Link
/* 
  1.- Muy bien sabemos que para trabajar con enlances y navegación, el tag (<a href="http://"></a>)
      anchor vendria bien, pero React, nos trae algo mas otimizado que es propio de
      react-router-dom y este es es Link
  2.- Para darle continudad al intem anterior, debes extarerlo 
  3.- Lo incluidmos dentro de una nav (utlizando los tag correctos por temas SEO)
  4.- Le agregamos algo de estilo ambos link
  5.- Si le das a inspecionar a los link, veras que vendra con el tag (a), pero mas optimizado


*/