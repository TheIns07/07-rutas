import React from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { Articulos } from '../Components/Articulos'
import { Contacto } from '../Components/Contacto'
import { Inicios } from '../Components/Inicios'
import { Crear } from '../Components/Panel/Crear'
import { AcercaDe } from '../Components/Panel/AcercaDe'
import { Gestionar } from '../Components/Panel/Gestionar'
import { PanelControl } from '../Components/PanelControl'
import { Persona } from '../Components/Persona'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1> Cabecera</h1>
      <hr />
      <h2>Menu</h2>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink to = "/" className={({isActive}) =>  isActive ? "activado": ""}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to = "/contacto" className={({isActive}) =>  isActive ? "activado": ""}>Contacto</NavLink>
          </li>
          <li>
            <NavLink to = "/articulos" className={({isActive}) =>  isActive ? "activado": ""}>Articulos</NavLink>
          </li>
          <li>
            <NavLink to = "/panel" className={({isActive}) =>  isActive ? "activado": ""}>Panel de Control</NavLink>
          </li>
        </ul>
      </nav>
      
      <section className = "contenido-principal">
        <Routes>
          <Route path="/" element={<Inicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/persona/:nombre/:apellido" element={<Persona />} />
          <Route path="/persona/:nombre" element={<Persona />} />
          <Route path="/persona" element={<Persona />} />
          <Route path={"/redirigir"} element={<Navigate to = "/"/>} />

          <Route path = {"/panel/*"} element = {<PanelControl/>}>
            <Route path = "inicio" element = {<Inicios/>}/>
            <Route path = "crear-articulos" element = {<Crear/>}/>
            <Route path = "gestion-usuarios" element = {<Gestionar/>}/>
            <Route path = "about" element = {<AcercaDe/>}/>
          </Route>

          <Route path="*" element={(
            <>
              <h1>Esta pagina no existe</h1>
              <Link to= "/">Regresar</Link>
            </>
          )} />
        </Routes>
      </section>
      <footer>
        Pie de Pagina
      </footer>
    </BrowserRouter>
  )
}
