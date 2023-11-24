import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-6xl font-bold'>CREM React - React Router DOM</h1>
    </>
  )
}

export default App

//? Que es el Routing

/* 
1.- Hasta  el momento solo hemos trabajado con SPA, single page aplication
2.- A traves de condicionales podias hacer la expreciencia de usuario de estabas en
    otra pagina, quitando y mostrando componentes.
3.- Routing (librerira de react), te permite trabajar con varias url, tener  y restringir 
    rutas 
4.- la que se usa es React-Roter / React-Router-DOM y en Version 6 las unieron y crearon a
    Reach Router.
5.- React-Router-DOM (RRD), como lo dijimos en el item anterior, libreria para crear app con Routing
    (direfentes Urls)
6.- Tendremos un mejor orden y por supuesto que podremos seguir re-utilizando los componentes que
    vayamos creando
7.- A partit de la V6.4 RRD, pasa a ser un framework, con manejo de rutas, peticiones http, 
    formularios y datos



*/






