import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='inicio'>
      <h1>Hola, soy Jasem Valencia y soy Desarrollador Web en Peru, y ofrezco mis servicios de <string>programacion y desarrollo</string>  en todo tipo de proyectos web.</h1>
      <h2>Te ayudo a crear tu sitio o aplicacion web, tener mas visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo.</Link> </h2>
      <section className='lasts-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos en desarrollo web</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}
