import React from 'react'
import { Routes, Route, Link, BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Personas } from '../components/Personas';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({isActive}) => isActive ? "activado" : ""}
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink 
            to="/articulos"
            className={({isActive}) => isActive ? "activado" : ""}
            >Articulos</NavLink>
          </li>
          <li>
            <NavLink 
            to="/contacto"
            className={({isActive}) => isActive ? "activado" : ""}
            >Contacto</NavLink>
          </li>
        </ul>
      </nav>

      <section className='contenido-principal'>
        {/* Cargar componentes */}
        {/* Aqui se carga el componente que coincide con el path */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path='/persona/:nombre/:apellido' element={<Personas/>} />
          <Route path='/persona/:nombre' element={<Personas/>}/>
          <Route path='/persona' element={<Personas/>}/>
          <Route path='/redirigir'element={<Navigate to={'/persona/jasem/valencia'}/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </BrowserRouter>

  )
}
