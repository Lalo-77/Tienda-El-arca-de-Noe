import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import CartWiew from '../CartWiew/CartWiew';
import './Cart.css'

const Cart = () => {

const { cart, total, clear } = useContext (CartContext);

    return (
        <div className='car'> 
        {cart.length 
        ?   <div className='Cart'style={{height:500}}>
            {cart.map((producto) => <CartWiew key={producto.id} producto={producto}/>)}
                <p>Total a pagar es: ${total}</p>
                <div>
                    <button onClick={clear}> Vaciar Carrito</button>
                    <Link to='/checkout'> Terminar Compra </Link>
                </div>
            </div> 
            : <div>
                <h2 className='mensaje'> Tu carrito esta vacio! </h2>
                <Link to= '/'> Ir a comprar</Link>
            </div>}
        </div>
    )
}

export default Cart
