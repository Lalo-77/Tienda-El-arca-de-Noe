import React from 'react'
import {Link} from 'react-router-dom'
import './item.css' 

const Item = ({product}) => {
    return (
<div className='tarjeta'> 
    <img  className='image' src={product.img}/>
    <p className='name'>{product.name}</p>
    <price className='precio'>${product.price}</price>
    <Link to={`/item/${product.id}`} className='verMas'>Ver mas</Link>
</div>
    )
}
export default Item
