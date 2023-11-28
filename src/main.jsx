import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/EditarCliente';
import {action as elimninarClienteAction} from './components/Cliente'
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
      },
      {
        path:'/clientes/:clienteId/eliminar',
        action: elimninarClienteAction
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//? Eliminando un registro del API

/* 
  1.- Creamos otra rama en nuestra rutas, que estara desarrollandose todo lo que se trate de eliminar

*/


