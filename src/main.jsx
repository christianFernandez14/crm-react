import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
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
        element: <NuevoCliente />,
        action: nuevoClienteAction
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//? Importando la action desde la page NuevoCliente.

/* 
  1.- Importando la action desde la page NuevoCliente.jsx, para que el formulario que esta en esta page, pueda reconocerlo,
      recuerda que la manera de como lo estamos importando con {}, es porque lo exportamos de manera nombrada
  2.- Lo renombramos (as), para que no tenga problemas con otros formularios que podamos crear el futuro
  3.- Se lo asignamos a la propiedad "action", del elemento que lo requiere, que este caso es la page NuevoCliente.jsx
  
*/


