import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import './CartWiew.css'

const CartWiew = () => {

const { cart, removeItem, total } = useCart ()

    return (
        <>
            <h1>CARRITO</h1>
                <div className='carComp'>
                    {
                    cart.map(producto => {
                        return (
                            <div key={producto.id} style={{ display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                                <h2>{producto.name}</h2>
                                <p>Precio unidad: ${producto.price}</p>
                                <p>Cantidad: {producto.quantity}</p>
                                <p>Sub total: ${producto.cantidad * producto.price}</p>
                                <button className='btnRem' onClick={() => removeItem(producto.id)}>X</button>
                            </div>
                        )
                    })
                }
                </div>
                <h1 className='total'>Total de la compra: ${total}</h1>
                <Link to='/checkout' className='checkout'>Completa tus datos</Link>
        </>
    )
}

export default CartWiew
