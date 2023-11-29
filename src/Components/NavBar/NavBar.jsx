import React from 'react'
import '../NavBar/NavBar.modules.css'
import CartWidget from '../CartWidget/CartWidget'
import Cart from '../Cart/Cart'

const NavBar = () => {
    return (
        <header>
            <nav className='Contenedor'>
                    <ul className='navBar'>
                        <li className='categorias'>
                            <h1 className='tit'>Tienda de Mascotas</h1>
                            <a>Juguetes</a>
                            <a>Accesorios</a>
                            <a>Ropa</a>
                            <a>Servicios</a>
                        </li>
                            <CartWidget/>
                            <Cart/>
                    </ul>
            </nav>        
        </header>
    )
}

export default NavBar
