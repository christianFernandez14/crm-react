import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import NuevoCliente from './pages/NuevoCliente';
import Index, { Loader as clientesLoader } from './pages/Index';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: < Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader
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

//? Imporntando el Loader

/* 
  1.- Lo importas aca, como un destructuring, ya que la exportacion de tipo nombrado
  2.- Como el Loader va a manejar estados de multiples componentes y todos van pasar
      primero por aca, para luego pasarlo  los componentes, en pocas palablar va manejar muchos
      loaders, por lo tanto es recomendable en la importancion asignarle un nombre con ("as")
  3.- Y ahora tu componete sabe que existe un loader, cuando le pasas una propiedad de nombre
      loader y el valor que importantes con el nuevo nombre asignado

*/


