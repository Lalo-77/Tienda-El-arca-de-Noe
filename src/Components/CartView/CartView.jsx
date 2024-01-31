import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import './CartView.css'
import { Toaster,toast } from 'sonner'

const CartView = () => {

const { cart, total, removeItem ,clear } = useCart ()
    return (
        <div className='cont'>
            <h1 className='carrito'>CARRITO</h1>
                <div className='carComp'>
                    {
                    cart.map(producto => {
                        return (
                            <div> 
                                <div key={producto.id} className='detalle'>
                                    <h2 className='nombre'> Producto: {producto.name} </h2>
                                    <p className='cant'> Cantidad: {producto.cantidad}</p>
                                    <p className='prec'> Precio unidad: ${producto.price} </p>
                                    <p className='subtotal'> Sub total: ${producto.cantidad * producto.price} </p>
                                    <button className='btnRem' onClick={() => (removeItem(producto.id)) (toast.warning('El producto se elimino')) } >X</button>
                                    <Toaster position="top-right" expand={true} />
                                </div>
                            </div>
                        )   
                    })
                } 
                </div>
                        <h1 className='total'>Total de la compra: ${total}</h1>
                        <br></br>
                            <div className='check'>
                                <Link to='/Checkout' className='checkout'> Terminar Compra</Link>
                                <button onClick= { () => (clear) (toast.info('tu carrito esta vacio')) } className='btn-Vac' > Vaciar Carrito</button>
                            </div>
                            <div className='final'>
                                <h2 className='mensaje'> Tu carrito esta vacio !</h2>
                                <Link to= '/' className='shopping'>Ir a comprar </Link>
                            </div>
        </div>
    )
}

export default CartView
