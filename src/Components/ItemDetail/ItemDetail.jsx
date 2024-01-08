import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {CartContext} from '../../Context/CartContext'
import './ItemDetail.css'
import {Link} from 'react-router-dom'

const ItemDetail = ({producto, id,price}) => { // trae el producto 
    const [quantityAdded, setQuantityAdded] = useState (false)
    
    const {addItem} = CartContext

    const onAdd =(cantidad) => {
    const objProductToAdd = {
        id, name, price, cantidad
    }
    addItem(objProductToAdd)
    console.log(`agregaste al carrito ${cantidad} productos`) 
    setQuantityAdded (true)
    }
    // aca va function que se va a ejecutar hacer click para agregar al carrito
    return (  
        <div className='tarj'>
            <h3 className='detalle'> Detalle de: {producto.name}</h3>
            <img className='img' src={producto.img} alt={producto.name}/>
            <p className='descripcion'>{producto.description}</p>
            <h4 className='categoria'>categoria: {producto.category} </h4>
            <p className='precio'>${producto.price}</p> 
            {  !quantityAdded ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            :<Link to='/cart' className='carrito'>Ir al Carrito</Link>  }
        </div>
    )
} 
export default ItemDetail
