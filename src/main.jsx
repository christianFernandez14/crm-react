import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import EditarCliente, { loader as editarClienteLoader } from './pages/EditarCliente';
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
        loader: editarClienteLoader
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//? Editando cliente y el uso del hook useParams (Que estas dentro de Loader)

/* 
  1.- Como otro estructura del REST API, la edicion forma parte de ella y la mejor forma de trabajar
      es recuperando la información que vas editar y para esto creamos otro elemento hijo del Layout
  
  2.- La particularidad aca es "/:clienteId/", ya que por el id, es que vamos editar ese cliente, y esos
      dos puntos (:), es lo que le indica a React, que eso sera dinamico

  3.- Creamos otro componete dentro de page y lo pasamos a la propiedad "element"

  4.- Importamos desde page, componente que recien creamos

  5.- Se lo damos como valor a la propiedad element

  6.- Importamos el loader desde EditarCliente.jsx y le cambiamos el nombre para que no exista conflicto y
      se lo pasamos a la propiedad "loader" del elemento EditarCliente.


  
*/


