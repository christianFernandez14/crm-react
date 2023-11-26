import { useNavigate } from "react-router-dom";

const NuevoCliente = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Clientes</h1>
      <p className="mt-3">LLena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        <p>Formulario aqui</p>

      </div>
    </>
  )
}

export default NuevoCliente


//? Trabajando en el Componente y con el hook useNavigate

/* 
1.- Me trate el h1 y p de Index.jsx, para tener el mismo formato  
2.- Creamos un boton en este componente por si el usuario no querie agregar nada y desea volver
3.- A pesar que tenemos una propiedad que nos ayuda navegar de react-router-dom que es Link, existe un hook
    que nos ayudara a navegar de forma programada y este es useNavigate, 
4.- En el caso del boton que creamos, para volver, puedes pasarle a la ruta como parametro ('/') o (-1)
    y este ultimo te llevara a la pagina anterior
5.- Recuerda, todos los hooks, sea dependecias o Customs, todos absolutamentes todos van dentro de la función
    del componete y hasta arriba
6.- El useNavigate delcarado, va estar asociado a un evento onClick del boton.

*/