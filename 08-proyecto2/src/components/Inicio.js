import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hola, soy Jasem Valencia y soy <strong>Desarrollador Web</strong> en Peru, y ofrezco mis servicios de <strong>programacion y desarrollo</strong>  en todo tipo de proyectos web.</h1>
      <h2>Te ayudo a crear tu sitio o aplicacion web, tener mas visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo.</Link> </h2>
      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos en desarrollo web</p>
        <ListadoTrabajos />
      </section>
    </div>
  )
}
