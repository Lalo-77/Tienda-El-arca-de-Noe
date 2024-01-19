import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import './CartView.css'
import { Toaster,toast } from 'sonner'

const CartView = () => {

const { cart, total, removeItem  } = useCart ()

    return (
        <div className='cont'>
            <h1 className='carrito'>CARRITO</h1>
                <div className='carComp'>
                    {
                    cart.map(producto => {
                        return (
                            <div key={producto.id} className='detalle' >
                                <h2 className='nombre'>{producto.name}</h2>
                                <p className='cant'>Cantidad: {producto.quantity}</p>
                                <p className='prec'>Precio unidad: ${producto.price}</p>
                                <p className='subtotal'>Sub total: ${producto.cantidad * producto.price}</p>
                                <button className='btnRem' onClick={() => removeItem(producto.id) (toast.warning('El producto se elimino del carrito'))}>X</button>
                                <Toaster/>
                            </div>
                        ) 
                    })
                }
                </div>
                <h1 className='total'>Total de la compra: ${total}</h1>
                <div className='check'>
                    <Link to='/checkout'  className='checkout'>Completa tus datos</Link>
                </div>
                
        </div>
    )
}

export default CartView
