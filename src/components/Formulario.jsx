const Formulario = ({cliente}) => {
  // console.log(cliente)
  return (
      <>
          <div className="mb-4">
              <label
                  className="text-gray-800"
                  htmlFor="nombre"
              >Nombre:</label>
              <input 
                  id="nombre"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre del Cliente"
                  name="nombre"
                  defaultValue={cliente?.nombre}
              />
          </div>
          <div className="mb-4">
              <label
                  className="text-gray-800"
                  htmlFor="empresa"
              >Empresa:</label>
              <input 
                  id="empresa"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Empresa del Cliente"
                  name="empresa"
                  defaultValue={cliente?.empresa}
              />
          </div>

          <div className="mb-4">
              <label
                  className="text-gray-800"
                  htmlFor="email"
              >E-mail:</label>
              <input 
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Email del Cliente"
                  name="email"
                  defaultValue={cliente?.email}
              />
          </div>

          <div className="mb-4">
              <label
                  className="text-gray-800"
                  htmlFor="telefono"
              >Teléfono:</label>
              <input 
                  id="telefono"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Teléfono del Cliente"
                  name="telefono"
                  defaultValue={cliente?.telefono}
              />
          </div>

          <div className="mb-4">
              <label
                  className="text-gray-800"
                  htmlFor="notas"
              >Notas:</label>
              <textarea
                  as="textarea"
                  id="notas"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                  placeholder="Notas del Cliente"
                  name="notas"
                  defaultValue={cliente?.notas}

              />
          </div>
      </>
  )
}

export default Formulario

//? Creando el Componente.
/* 
  1.- Aca ya estamos recibiendo por props clientes, puedes hacer un destructrin el llamado del componente o
      dentro del mismo.
  2.- Lo anterior es para que se lo pases al atributo "value" y asi obetener lo que viene por las props

  3.- Antes de hacer lo anterior, comprobamos que esten llegando a Formulario la data

  4.- Luego corregimos el atributo "value" por "deafulValue", ya que nos generaba un error de onChange, pero
      como no estamos viendo cambios simultanes en un state, usamos este otro atributo.
  5.- A cada propiedad de cliente, le verifico si viene lalgo con optional chaing,  
*/ 