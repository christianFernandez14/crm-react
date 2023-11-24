import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold">CRM - REACT</h1>

      <Outlet />
    </div>
  )
}

export default Layout






//? Creando el componente
/* 
1.- Utlizas el snnipet de rafce, para que te cree tu componente con formato arrow function
2.- Importamos el comporente Outlet de react-router-dom, este componente ESPECIAL que importamos va actuar como un Placeholder o un contenedor dinamico, es decir todo elemento que este dentro de la 
    propiedad "children" aputaran el Outlet al componete que le pases. 
3.- Donde renderices el Outlet, justo ahi vendra inyectado el contenido y lo que este antes
    se mantendra
 


*/