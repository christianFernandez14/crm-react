Creando una REST Api, con Json Server (un dependecia para trabajar Rest Api falsa).

REST = Representation State Transfer

.- Lo vamos a realizar sin hacer ninguna configuracion (solo usando la dependencia), en pocos segundos

.- Una de las ventajas de usar esta dependencia, es que si el backEnd aun no finaliza, el frondEnd
   puede ir haciendo sus pruebas.

.- Todo esto, porque debe cumplir ciertos formatos a ciertos tipos de Request o solicitudes.

.- Podemos diseñalar en cualquier leguaje (Js, Python, Php, Node)

.- Consulta de recursos a una DB y consumen los resultados con algunas desde el frond (React, Angular, Vue)

.- Debe reponder a los Request HTTP (con estos son suficientes para crear una RESTApi):

    => GET (Obtener) - de una DB o de una API
    => POST (Enviar o Creación) al Servidor (Registro nuevo)
    => PUT O PATCH (Actualizar)
    => DELETE (Eliminar)

.- Importante que tengas en cuenta es que una REST Api, tiene una forma ordenada y estructurada de poner a disposición los 
   recursos

.- Sigue ciertos formatos en sus Rutas (se le conoce como Endpoints)

    => Una REST Api, cuenta con Endpoint o Urls, para hacer operaciones CRUD (CREATE READ UPDATE DELETE)
    Ej:
      .- Listar todo los clientes  => GET  /clientes  (se hace una petición de tipo GET al endpoint o url /clientes)

      .- Listar un solo clientes  => GET  /cliente/7  (se hace una petición de tipo GET al endpoint o url /clientes/7, donde el id
                                                        del cliente es 7)

      .- Crear un nuevo cliente  => POST  /clientes  (se hace una petición de tipo POST al endpoint o url /clientes)

      .- Editar algún cliente  => PUT o PATCH  /cliente/7  (se hace una petición de tipo PUT o PATCH al endpoint o url /clientes/7, donde el id
                                                            del cliente es 7)

      .- Eliminar algún cliente  => DELETE  /cliente/7  (se hace una petición de tipo DELETE al endpoint o url /clientes/7, donde el id
                                                            del cliente es 7)

COMO LO USAMOS.

1.- Instalamos la dependencia (npm i -g json-server), la g significa de manera global
2.- Creamos un archivo "db.json" en la raiz de tu proyecto
3.- Colocamos algo de data en en archivo (db.json)
    Consideraciones de que esun json (Js Object Notation) y como esta compuesto:

      => Es muy parecido a un objeto 
      => En Json, todo debe estar en comilla dobles, puede haber algunas excepciones, como los numero y los boolenos
      => No existe el igual (=), se cambia por dos punto (:)
      => Si acepta arreglos de registros
      => Cada registro puede estar en otro array, pero al final de debe haber un objeto de elementos
      => Al llegar al ultimo elmento, nos es necesario colocar una coma (,)

4.- Ya con todo ordenado en tu db.json, en la terminal colocas el siguiente codigo "json-server --watch db.json"
    y le damos enter. ó le puedes definir un puerto, es mejor usar la primera opción