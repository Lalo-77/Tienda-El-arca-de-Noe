import React from 'react'
import './item.css'
const Item = ({id, name, img, price, category, stock, description}) => {
    return (
    <div  className='tarjeta'>
        <img className='imagen' src={img}/>
        <h1 className='id' >{id}</h1>
        <h2 className='nombre' >{name}</h2>
        <h3 className='price'>$ {price}</h3>
        <h3 className='category'>{category}</h3>
        <p className='stock'>{stock}</p>
        <p className='description'>{description}</p>
        <button>Ver mas</button>
    </div>
    )
}

export default Item
