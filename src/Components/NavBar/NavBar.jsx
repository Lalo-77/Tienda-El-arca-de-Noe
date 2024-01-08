import React from 'react'
import '../NavBar/NavBar.modules.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
            <nav className='navBar'>
                <Link to={'/'} className='link' >El Arca de Noe</Link>
                <img className='barco' src='../../img/barco.png' alt='logo'/>
                <section className='categorias'>
                    <h1 className='tit'>Tienda de Mascotas</h1>
                    <Link to='/category/accesorios' className='accesorios'>Accesorios</Link>
                    <Link to='/category/juguetes' className='juguetes'>Juguetes</Link>
                    <Link to='/category/limpieza' className='limpieza'>Limpieza</Link>
                    <Link to='/category/ropa' className='ropa'>Ropa</Link>
                    <Link to='/category/servicios' className='servicios'>Servicios</Link>
                </section>  
                <CartWidget/>
            </nav>        
    )
}

export default NavBar
