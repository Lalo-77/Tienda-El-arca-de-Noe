import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './item.css' 

const [cart, setCart] = useState ({})
const addToCart = () => {
    setCart((agregItems) => {
    const hayEnCar = agregItems.find((item) => item.id === id);
    if(hayEnCar) {
    return agregItems.map((item) => {
    if(item.id === id) {
    return { ...item, cantidad: item.cantidad + 1};
    } else {
    return item;
    } 
    }); 
};
});
};
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
