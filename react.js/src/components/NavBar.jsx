import React from 'react'
import { Cartwidget } from './CarWidget'

export const NavBar = (message) => {
  return (
    <nav>
      <h1>Mi Tienda</h1> 
      <Cartwidget/>
    </nav>
  )
}