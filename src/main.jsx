import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([

  {
    path:'/',
    element: <h1>Pagina de Inicio</h1>
  },
  {
    path:'/nosotros',
    element: <h1>Pagina de Mensaje</h1>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

//? Instalando / Configurando React Router DOM

/* 
1.- npm i react-router-dom  en tu terminal, de esta manera se instala la ultima version, lo puedes
    ver en tu package.json (para este moemnto del proyecto de instalo la V6.20)
2.- Hicimos un poco de limpieza en nuetro entorno de trabajo:
    .- Borramos la carpeta assets
    .- El App.css
    .- El App.jsx (aca te va generar un error, por que este componente lo esta llamando el main.jsx)
       solo debes quitarlo del main.jsx
3.- Vamos importar un componente (RouterProvider) que es un provider y una funcion 
    ( createBrowserRouter) de react-router-dom
4.- Ahora el RouterProvider sera nuestro componente principal
5.- RouterProvider, espera un prop de un router, donde estaran definidas las rutas, puedes definirla
    aca en este archivo o puede crear un archivo aparte, ese router lo creas con funcion que importaste
    react-router-dom (createBrowserRouter)
6.- Cuando estas creando el router, el createBrowserRouter se le pasa un array, donde manejara por cada
    elemento objetos que manejaran tu rutas
7.- Esos obejtos que se crearon el arrya, llevan dos propiedades, "path" (el nombre de tu url en string)
    y "element" (el componente que llevara todo el desarrollo de esa ruta)
8.- De esta manera maneja las distintas paginas de ti app, par air navegando entre las distintas urls
    o paginas.


*/


