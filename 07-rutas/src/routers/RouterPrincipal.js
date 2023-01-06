import React from 'react'
import { Routes, Route, Link, BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Personas } from '../components/Personas';
import { PanelControl } from '../components/PanelControl';
import { Inicio as InicioPanel } from '../components/panel/Inicio'
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';



export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => isActive ? "activado" : ""}
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => isActive ? "activado" : ""}
            >Articulos</NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => isActive ? "activado" : ""}
            >Contacto</NavLink>
          </li>
          <li>
            <NavLink
              to="/panel"
              className={({ isActive }) => isActive ? "activado" : ""}
            >Panel de control</NavLink>
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
          <Route path='/persona/:nombre/:apellido' element={<Personas />} />
          <Route path='/persona/:nombre' element={<Personas />} />
          <Route path='/persona' element={<Personas />} />
          <Route path='/redirigir' element={<Navigate to={'/persona/jasem/valencia'} />} />
          <Route path='/panel/*' element={<PanelControl />}>
            <Route index element={<Inicio />} />
            <Route path='inicio' element={<InicioPanel />} />
            <Route path='crear-articulos' element={<Crear />} />
            <Route path='gestion-articulos' element={<Gestion />} />
            <Route path='acerca-de' element={<Acerca />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </BrowserRouter>

  )
}
