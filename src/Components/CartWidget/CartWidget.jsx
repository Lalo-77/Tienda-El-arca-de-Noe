import React, { useContext }from 'react'
import carrito from './assets/carrito.png'
import '../CartWidget/CartWidget.css'
import {Link, NavLink} from 'react-router-dom'

const CartWidget = () => {

    return (
            <div className='numer'>
                <Link as={NavLink} to={'/Cart'}><img className='carrito' src={carrito}/>
                <span className='cantidad'>0</span></Link>
            </div>
    )
} 

export default CartWidget