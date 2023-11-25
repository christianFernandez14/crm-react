

const Cliente = ({ cliente }) => {

  console.log(cliente)
  const { id, nombre, empresa, telefono, email } = cliente
  return (
    <>
      <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-gray-800">{nombre}</p>
          <p>{empresa}</p>
        </td>
        <td className="p-6">
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">
              Email:{' '}
            </span>
            {email}
          </p>
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">
              Tel:{' '}
            </span>
            {telefono}
          </p>
        </td>
        <td className="p-6 flex gap-4">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          >
            editar
          </button>

          <button
            type="button"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            elimninar
          </button>
        </td>
      </tr>
    </>
  )
}

export default Cliente


//? Mostrando el resto de la información que viene del state de clientes
/* 
1.- Completamos la inforacion que va en la columna contacto y la columna Acciones
2.- Le dimos algo de estilos a como se ve el contenido
3.- En los botones de "editar" y "eliminar" es importante que le especique que es de tipo
    button, para que se comporte como tal
 

*/