import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './item.css' 

const Item = ({product})=> { // es un objeto
    
    return (
<div className='tarjeta'> 
    <img className='image' src={product.img}/>
    <p className='name'>{product.name}</p>
    <p className='precio'>${product.price}</p>
    <Link to={`/item/${product.id}`} className='verMas'>Ver mas</Link>
</div>
    )
} 
export default Item
