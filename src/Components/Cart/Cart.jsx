import React, {useContext} from 'react'
import {CartContext} from '../../Context/CartContext'

export const Cart = () => {
const {cart, clear, total} = useContext(CartContext)


    return (
    <div className='Cart'style={{height:500}}>
        <h1 className='titulo'style={{color:'black'}}>Este es tu Carrito</h1>
        <div>
            <button onClick={clear}>Vaciar Carrito</button>
            <Link to='/checkout'>Terminar Compra</Link>
        </div>
        <div>
            <h2> Tu carrito esta vacio! </h2>
            <Link to= '/' > Ir a comprar</Link>
        </div>
    </div>
    )
}

export default Cart

