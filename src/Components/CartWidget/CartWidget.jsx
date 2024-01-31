import React from 'react'
import carrito from './assets/carrito.png'
import '../CartWidget/CartWidget.css'
import { Link, NavLink} from 'react-router-dom'
import { useCart }from '../../Context/CartContext'

const CartWidget = () => {

    const { total } = useCart ()

    return (

            <button className='cart' as={ NavLink } to={'/Cart'}>
                <img className='carr' src={carrito} />
                { total }
            </button>
    )
} 

export default CartWidget