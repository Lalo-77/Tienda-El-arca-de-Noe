import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'

const CartWiew = (producto) => {

const { cart, removeItem,total, } = useCart ()
    return (
        <>
            <h1>CARRITO</h1>
                <div>
                    {
                    cart.map(producto => {
                        return (
                            <div key={producto.id} style={{ display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                                <h2>{producto.name}</h2>
                                <p>Precio unidad: ${producto.price}</p>
                                <p>Cantidad: {producto.quantity}</p>
                                <p>Sub total: ${producto.quantity * producto.price}</p>
                                <button onClick={() => removeItem(producto.id)}>X</button>
                            </div>
                        )
                    })
                }
                </div>
                <h1>Total de la compra: ${total}</h1>
                <Link to='/checkout'>Checkout</Link>
        </>
    )
}

export default CartWiew
