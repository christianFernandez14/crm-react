import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import NuevoCliente from './pages/NuevoCliente';
import Index from './pages/Index';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: < Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//? Pasos de tu estructura principal

/* 
1.- Tu primero componente debe ser un Layout, por lo tanto vas a crear dentro src/components/Layout.jsx, ya que se repetitra en multuples componentes
2.- Importamos el Layout.jsx n tu componente que lo rederiza, para este caso es justo el main.jsx
3.- Se lo pasamos al la propiedad "element" de la ruta.
4.- Ahora como podras ver tenemos una tercera propiedad "children", no es mas que un array de objetos con elementos que seran renderizados y a su vez tendran el layout dentro de su estructura.
5.- Lo anterior esta diseñado para evitar repetir codigo.
6.- Siendo este un proyecto un  CRM, modificamos la ruta "/nosotros" por "/clientes/nuevo"
7.- Vamos a separar los componentes que se comportoran como rutas (estos estaran en un folder de nombre pages) y los componentes que estan dentro components, renderizaran algo en particular (y que sera reutilizable).
8.- Importo NuevoCliente desde page, como elemento hijo, para que me pueda mostrar mi Layout
9.- Lo Renderizo en la propiedad "element" del path: '/clientes/nuevo'.
10.- Separo lo que es el Layout de su contenido y para eso, creo otro elmento, que sera el primer
     indice de children, donde manejara las propiedades de ("index" "element") la primera le 
     especifico con un boolenao que lo que venga en "element" se mostrara como contenido y
     esta vendra de pages.
11.- Siguiendo el orden del item anterior, importo el componente Index.jsx al main y lo coloco
     como valor de "element", para que pueda renderizar contenido y lo separo de Layout en si.

*/


