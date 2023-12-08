import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ img, name,description, price}) = props
    return (
        product? (
    <div  className='tarjeta'>
        <img className='imagen' src={products.img} alt={name} whidth={125}/>
        <h1 className='nombre' >{products.name}</h1>
        <p className='description'>{producto.description}</p>
        <h3 className='price'>$ {products.price}</h3>
        <button as={Link} to={`/item/${products.id}</div>`} >Ver mas</button>
    </div>
    ) : null
    )

export default Item
