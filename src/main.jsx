import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/EditarCliente';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: < Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//? Trabajando con el action de EditarCliente

/* 
  1.- En la ruta con el componente EditarCliente, le especificamos que tiene un action.

  2.- Obviamente en el paso anterior lo importamos en este componentey lo renombramos, para que 
      no vaya a tener conflictos con otros actions que estemos trabajando.

*/


