

const Cliente = ({ cliente }) => {

  console.log(cliente)
  const { id, nombre, empresa, telefono, email } = cliente
  return (
    <>
      <tr>
        <td className="p-6">
          {nombre}
        </td>
      </tr>
    </>
  )
}

export default Cliente


//? Creando Componente
/* 
1.- Utlizas el snnipet de rafce, para que te cree tu componente con formato arrow function
2.- Recibimos las propos que me envia Index.jsx, para poder trabajarr con la data.
3.- Viendo que es un objeto que me estan pasando, con el CLG, puedo hacer un destructuring 
    y obtener la propiedades con las que voy a trabajar y asi solo usar el nombre de la
    propiedad y no el conjunto "obejeto.propiedad"
4.- Le dimos un poco de estilo a la fila (padding)
 

*/