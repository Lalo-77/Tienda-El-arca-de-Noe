import React from 'react'
import '../../Styles/NavBar.modules.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <nav className='Contenedor'>
                    <ul className='navBar'>
                        <li className='tit'>El Arca de Noe</li>
                        <li className='categorias'>
                            <a>Juguetes</a>
                            <a>Accesorios</a>
                            <a>Ropa</a>
                            <a>Servicios</a>
                        </li>
                        <li className='carrito'>
                            <CartWidget/>
                        </li>
                    </ul>
                    <div>
                        <h1>TIENDA EL ARCA DE NOE</h1>
                        <h2>Accesorios para Tu mascota</h2>
                    </div>   
                
            </nav>        
        </header>
    )
}

export default NavBar
