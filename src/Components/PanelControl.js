import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de Control</h1>
        <p>Elige una opcion</p>
        <nav>
            <ul>
                <li>
                    <NavLink to = "/panel/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to = "/panel/crear-articulos">Articulos</NavLink>
                </li>
                <li>
                    <NavLink to = "/panel/gestion-usuarios">Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to = "/panel/about">Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
        <Outlet/>
      </div>
    </div>
  )
}
