import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Cart from '../Cart/Cart'
import './ItemDetail.css'

const ItemDetail = ({producto}) => { 

    const onAdd =(cantidad) => {
        console.log(`comprastre ${cantidad} productos`);
    }
    return (  
        <div className='tarj'>
            <h3 className='detalle'>Detalle de: {producto.name}</h3>
            <img src={producto.img} alt={producto.name}/>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            <Cart/>
        </div>
    )
}

export default ItemDetail
