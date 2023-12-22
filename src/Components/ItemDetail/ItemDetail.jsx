import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({producto}) => { 

    const onAdd =(cantidad) => {
        console.log(`comprastre ${cantidad} productos`);
    }
    // aca va function que se va a ejecutat al hacer click para agregar al carrito
    return (  
        <div className='tarj'>
            <h3 className='detalle'> Detalle de: {producto.name}</h3>
            <img className='img' src={producto.img} alt={producto.name}/>
            <p className='description'>{producto.description}</p>
            <p className='precio'>${producto.price}</p> 
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
} 

export default ItemDetail
