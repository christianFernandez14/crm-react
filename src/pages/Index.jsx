import { useLoaderData } from "react-router-dom";


export function loader() {

  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];

  return clientes;
}


const Index = () => {

  const datos = useLoaderData()

  console.log(datos)

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
    </>

  )
}

export default Index


//? Obtiendo los datos del Loader

/* 
  1.- Modifique el nombre del Loader, porque debe ser en minuscula, y lo modifique tambien
      el main, donode lo estoy importando.
  2.- Recuerda que el return de loader, va ser le State del componente
  3.- En este componete ya tenemos disponible el loader para trabajar con, gracias a la
      configuración que se hizo en el main
  4.- Y la manera de trabajar con el es usando un hook (useLoaderData), que se encargara de
      obtener lo que retornes en la funcion loader
  5.- Como puedes ver declaramos un objeto de nombre "clientes", y lo retornamos, todo esto dentro
      de la función loader
  6.- Y para acceder a esos datos lo que hicimos fue declarar un varible, le asiganamos el hook
      y le hicimos un CLG a la variable y nos trae el objeto
  7.- Y de esta manera ya tiene tu State disonible para trabaja con el, como por ejemplo iterar 
      sobre clientes y rederizarlo en el componente


*/
