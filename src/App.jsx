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

//? Pasos a seguir:


//  1.- Ya creado el proyecto, instaladas las dependencas bases y arriba el proyecto (npm run dev)
//  2.- Instalamos dependencias para trabajar con tailwind (npm i -d tailwindcss postcss autoprefixer)
//      recuerda que la -d es porque la estamosinstalando bajo un ambiente de desarrollo
//  3.- instalamos los archivos de configuración para que pueda trabajar tailwind (npx tailwindcss init -p)
//  4.- Con el comando anterior se crean dos arhivos en el directorio raiz de tu proyecto 
//      (postcss.config.js tailwind.config.js)
//  5.- de los dos archivos que se crearon entramos en tailwind.config.js y configuramos la propiedad 
//      "content" de esta manera content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
//  6.- Vas a tu index.css, borras el contenido que exite ahi y colocalas lo siguiente
//      @tailwind base;
//      @tailwind components;
//      @tailwind utilities;
//  7.- Ya con esta configuracion puedes comnezar usar las predefinidas de tailwind en tu proyecto
//  8.- Si por algun razon no ves los cambio, deten el servidor y vuelvelo a recargar.



