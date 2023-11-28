import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from '../api/clientes'


export async function action({ params }) {

  await eliminarCliente(params.clienteId)

  return redirect('/')

}

const Cliente = ({ cliente }) => {

  const navigate = useNavigate()

  // console.log(cliente)
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
            onClick={() => navigate(`/clientes/${id}/editar`)}
          >
            editar
          </button>

          <Form
            method="post"
            action={`/clientes/${id}/eliminar`}
            onSubmit={e => {
              if (!confirm('¿Deseas elimninar el cliente ?')) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
            >
              elimninar
            </button>
          </Form>
        </td>
      </tr>
    </>
  )
}

export default Cliente


//? Eliminando un registro del API
/* 
1.- Para el boton Eliminar pueda hacer su funcion, debemos rodearlo dentro de un Form, y type () atributo
    debe ser ahora Submit

2.- Obviamente debes importar el Form de "react-router-dom"

3.- Debes crear un action para este boton y debe comunicar el action con el componente

4.- Esta action que creaste de alguna manera debe enterarse que cliente debe eleminar, por eso le pasamos
    por paramentros el params, ya que es el que me permite obtener el id

5.- El redirect, lo vamos a requeir para el return de la action.

6.- Al componente form, le pasamos el atributo (method: post) y redefinimos un action, donde podamos recuperar
    el id del cliente que queremos eliminar, y eso esta asociado a como lo definimos en el main.jsx 

7.- Importanamos el funcnion que se encargara de la logica de elimniar en el cliente y la colocamos en el action

8.- Nos dimos que cuenta, que se comunica perfecto, pero si le das al boton eliminar. lo elimina sin darle
    al usuario la posibilidad de arrepentirse (experiencia de usuario.).

9.- Para lo anterio al Form, le agregamos cun onSubmit (que es propio de React), para que valide eso

10.- previniendo la accion por default.

11.- Como estoy previniendo al acction por default, es decir que entre en el action y elimine el valor si le
     da aceptar, lo esta haciendo cuando le damos cancelar, para solucionar esto, negamos el if
 

*/