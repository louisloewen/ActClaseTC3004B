import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/agregar-item">Agregar</Link>
      <Link to="/lista-items">Articulos</Link>
    </div>
  )
}

export default Header

