import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import  CartWiew  from '../CartWiew/CartWiew'
import './Cart.css'

const Cart = () => { 

const { cart, total, clear } = useCart ();

    return (
        <div className='car'> 
        {cart.length 
        ?   <div className='Cart'>
            {cart.map((producto) => <CartWiew key={producto.id} {...producto}/>)}
                <p className='total'>Total a pagar es: ${total}</p>
                <div className='caracProd'>
                    <button onClick={clear} className='btn-Vac'> Vaciar Carrito</button>
                    
                    <Link to='/Checkout' className='termComp'> Terminar Compra</Link>
                </div>
            </div> 
            : <div>
                <h2 className='mensaje'> Tu carrito esta vacio! </h2>
                <Link to= '/' className='shopping'>Ir a comprar </Link>
            </div>}
        </div>
    )
}
export default Cart
