import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/contacto" element={<Contacto />} />
            
        </Routes>
    </BrowserRouter>
  )
}
