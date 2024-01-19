import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import  CartView  from '../CartView/CartView'
import './Cart.css'
import {Toaster, toast} from 'sonner'

const Cart = () => { 

const { cart, total, clear } = useCart ();

    return (
        <div className='car'> 
        {cart.length 
        ?   <div className='Cart'>
            {cart.map((producto) => <CartView key={producto.id} {...producto}/>)}
                <p className='total'>Total a pagar es: ${total}</p>
                <div className='caracProd'>
                    <button onClick= {(clear)}  className='btn-Vac'> Vaciar Carrito</button>
                    
                    <Link to='/Checkout' className='termComp'>Checkout</Link>
                </div>
            </div> 
            : <div>
                <h2 className='mensaje'> Tu carrito esta vacio!</h2>
                <Link to= '/' className='shopping'>Ir a comprar </Link>
            </div>}
            <Toaster position="top-right" expand={true} richColors />
        </div>
    )
}
export default Cart
