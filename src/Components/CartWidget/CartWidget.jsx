import React from 'react'
import carrito from '../../../public/img/carrito.png'
import '../CartWidget/CartWidget.css'

const CartWidget = () => {
    return (
        <div className='numer'>
            <img className='carrito' src={carrito} />
            <span className='cantidad'> 0 </span>
        </div>
    )
}

export default CartWidget
