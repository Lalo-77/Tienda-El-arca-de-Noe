import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { useCart } from '../../Context/CartContext'

const ItemDetail = ({producto, id, price}) => { // trae el producto 
const {addItem, isInCart} = useCart() // tiene un objeto
console.log(useCart);
//const {quantityAdded, setQuantityAdded} = useState ('')
const onAdd =(cantidad) => {
    //setQuantityAdded(cantidad)
        const productAgreg = {
        id, name, price, cantidad
    }
    addItem(productAgreg,cantidad) 
    console.log(`agregaste al carrito ${cantidad} productos`)  
    
    }
    // aca va function que se va a ejecutar hacer click para agregar al carrito
return ( 
    <div className='tarj'>
        <h3 className='detalle'> Detalle de: {producto.name}</h3>
        <img className='img' src={producto.img} alt={producto.name}/>
        <p className='descripcion'>{producto.description}</p>
        <h4 className='categoria'>categoria: {producto.category} </h4>
        <p className='precio'>${producto.price}</p> 
        { 
        !isInCart(id) ? ( 
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        ) : ( 
            <Link to='/cart' className='carrito'>Finalizar Compra</Link>
        )
        }
    </div>
    )
} 
export default ItemDetail
