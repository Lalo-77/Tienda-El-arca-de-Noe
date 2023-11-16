import React from 'react'
import carrito from '../../../public/img/carrito.png'

const CartWidget = () => {
    return (
        <div className='numer'>
            <img className='carrito' src={carrito}/> 
            <span> 0 </span>
        </div>
    )
}

export default CartWidget
