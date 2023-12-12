import React from 'react'
import '../NavBar/NavBar.modules.css'
import CartWidget from '../CartWidget/CartWidget'
import Cart from '../Cart/Cart'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
            <nav className='navBar'>
                            <Link as={NavLink} to={'/'} className='link' >El Arca de Noe</Link>
                            <img className='barco' src='../../../public/img/barco.png' alt='logo'/>
                        <section className='categorias'>
                            <h1 className='tit'>Tienda de Mascotas</h1>
                            <Link as={NavLink} to={'/category/accesorios'} className='accesorios'>Accesorios</Link>
                            <Link as={NavLink} to={'/category/juguetes'} className='juguetes'>Juguetes</Link>
                            <Link as={NavLink} to={'/category/limpieza'} className='limpieza'>Limpieza</Link>
                            <Link as={NavLink} to={'/category/ropa'} className='ropa'>Ropa</Link>
                            <Link as={NavLink} to={'/category/servicios'} className='servicios'>Servicios</Link>
                        </section>
                            <CartWidget/>
                            <Cart/>
            </nav>        
    )
}

export default NavBar
