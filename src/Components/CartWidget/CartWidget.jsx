import React from 'react'
import carrito from './assets/carrito.png'
import '../CartWidget/CartWidget.css'
import { Link, NavLink } from 'react-router-dom'
import { useCart }from '../../Context/CartContext'

const CartWidget = () => {

    const {cartQuantity} = useCart ()

    return (
            <div>
                <Link as={NavLink} to={'/Cart'}><img className='carr' src={carrito}/></Link>
                { cartQuantity () > 0 && <Badge>{ cartQuantity }</Badge> }
            </div>
    )
} 

export default CartWidget