import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
import {Toaster, toast} from 'sonner'

const ItemDetail = ({name, category, img, id, price, description }) => { // trae el producto 
const {addItem, isInCart} = useCart() // tiene un objeto

const onAdd =(cantidad) => {
        const productAgreg = {
        id, name, price, cantidad
    }
    addItem(productAgreg,cantidad) 
    toast.success(`agregaste al carrito ${cantidad} productos`)  
    }
    // aca va function que se va a ejecutar hacer click para agregar al carrito
return ( 
    <div className='tarj'>
        <h3 className='detalle'> Detalle de: {name}</h3>
        <img className='img' src={img} alt={name}/>
        <p className='descripcion'>{description}</p>
        <h4 className='categoria'>categoria: {category} </h4>
        <p className='precio'>${price}</p> 
        { 
            isInCart(id) ? ( 
                <Link to='/cart' className='finalCompra'>Finalizar Compra</Link>
                ) : ( 
                <ItemCount initial={1} modifiBy={1} onAdd={onAdd}/>
            )
        }
    </div> 
    )
} 
export default ItemDetail
